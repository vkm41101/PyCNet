import connectMongo from "../../utils/connectMongo";
import userObject from "../../models/user";
import { setInRedis } from "../../utils/redisClient";
import {createHash} from 'crypto';

(async ()=>{await connectMongo()})();

const createSession= async (userID)=>{
    let sessionID=new Date().getTime().toString(16);
    await setInRedis(sessionID+"status", "active");
    await setInRedis(sessionID, userID);
    return sessionID;
};

export default function respond(req, res)
{
    if(req.method!=='POST')
    {
        let response={
            statusCode: 400,
            message: "Bad Request"
        }
        res.status(400).end(JSON.stringify(response));
    }
    else
    {
        let datar=(req.body);
        userObject.findOne({emailID:datar.emailID}).then(async (dataf)=>{
            if(dataf==null)
            {
                let response={
                    statusCode: 404,
                    message: "User not found"
                }
                res.status(404).end(JSON.stringify(response));
            }
            else 
            {
                let response={
                    statusCode: 200
                };
                let recievedPassword=createHash('sha256').update(datar.password).digest('hex');
                if(recievedPassword===dataf.password)
                {
                    let sessionID=await createSession(dataf.emailID);
                    response={
                        ...response,
                        authenticated: 1,
                        message: "Access Granted",
                        sessionID: sessionID
                    }
                    res.status(200).end(JSON.stringify(response));
                }
                else 
                {
                    response={
                        ...response,
                        authenticated: 0,
                        message: "Access Denied",
                    }
                    res.status(200).end(JSON.stringify(response));
                }
            }
        })
    }
}