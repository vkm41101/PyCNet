import userObject from '../../models/user'
const {createHash} = require('crypto');
import connectMongo from '../../utils/connectMongo';

(async ()=>{await connectMongo()})();

export default async function respond(req, res)
{
    if(req.method==='POST')
    {
        console.log(req.body);
        let data=req.body;
        userObject.findOne({emailID: data.emailID}).then(async (dataf)=>{
            if (dataf!=null)
            {
                let response = {
                    statusCode: 400,
                    message: "User Already Exists"
                }
                res.status(400).end(JSON.stringify(response));
            }
            else
            {
                let userid = new Date().getTime().toString(16);
                let user = new userObject({
                    userID: userid,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    emailID: data.emailID,
                    password: ((string) => { return createHash('sha256').update(string).digest('hex') })(data.password),
                    codechefID: data.codechefID,
                    codeforcesID: data.codeforcesID,
                    questionsSolved: []
                })
                console.log(user);
                await user.save();
                let response = {
                    statusCode: 200,
                    message: "Registration Succesful"
                }
                res.status(200).end(JSON.stringify(response));
            }
        });
    }
}