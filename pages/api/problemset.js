import problemObject from "../../models/problem";

export default async function respond(req, res)
{
    if(req.method === 'GET') 
    {
        problemObject.find().then(async (data) =>{
            let response={"problemSet" : []};
            data.forEach((object) =>{
                response.problemSet.push({
                    problemID: object.problemID,
                    problemName: object.problemName,
                    author: object.author,
                    tags: object.tags 
                })
            });
            res.status(200).json(response);
        })
    }
}