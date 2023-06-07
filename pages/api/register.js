import userObject from '../../models/user'
const {createHash} = require('crypto');
import connectMongo from '../../utils/connectMongo';

(async ()=>{await connectMongo()})();

export default async function respond(req, res)
{
    if(req.method==='POST')
    {
        console.log(req.body);
        let datar=JSON.parse(req.body);

        userObject.findOne({emailID: datar.emailID}).then(async (dataf)=>{
            if (dataf!=null)
            {
                let response = {
                    statusCode: 405,
                    message: "User Already Exists"
                }
                res.status(405).end(JSON.stringify(response));
            }
            else
            {
                let userid = new Date().getTime().toString(16);
                let user = new userObject({
                    userID: userid,
                    firstName: datar.firstName,
                    lastName: datar.lastName,
                    emailID: datar.emailID,
                    password: ((string) => { return createHash('sha256').update(string).digest('hex') })(datar.password),
                    codechefID: datar.codechefID,
                    codeforcesID: datar.codeforcesID,
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
    else {
        let response = {
            statusCode: 400,
            message: "Bad Request"
        }
        res.status(400).end(JSON.stringify(response));
    }
}