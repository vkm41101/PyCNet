import problemObject  from "../../models/problem";
import connectMongo from "../../utils/connectMongo";

(async () => {await connectMongo()})();

export default async function respond(req, res)
{
    if(req.method === 'POST')
    {
        // POST a question
        let data = req.body;
        console.log(data);
        var problemID=new Date().getTime().toString(16);
        const problem = new problemObject({
            problemID : problemID,
            problemName: data.problemName,
            problemStatement : data.problemStatement,
            problemInputFormat : data.problemInputFormat,
            problemOutputFormat : data.problemOutputFormat,
            problemConstraint : data.problemConstraint,
            timeLimit : data.timeLimit,
            sampleTestCase: data.sampleTestCase,
            author: data.author,
            tags: data.tags
        });
        await problem.save();
        res.status(200).json({"problemID" : problem.problemID});
    }
    else if(req.method === 'GET')
    {
        // send list of Question
        let query=req.query;
        problemObject.findOne({"problemID" : query.problemID}).then(async (data) =>{
            if(data==null)
            {
                res.status(404).send("404: Problem ID Not Found");
            }
            else
            {
                const problem = {
                    problemID: data.problemID,
                    problemName: data.problemName,
                    problemStatement: data.problemStatement,
                    problemInputFormat: data.problemInputFormat,
                    problemOutputFormat: data.problemOutputFormat,
                    problemConstraint: data.problemConstraint,
                    timeLimit: data.timeLimit,
                    sampleTestCase: data.sampleTestCase,
                    author: data.author,
                    tags: data.tags
                };
                res.status(200).json(problem);
            }
        })
    }
}
