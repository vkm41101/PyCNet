import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema({
    input: String,
    output: String,
});

const problemSchema = new mongoose.Schema({
    problemID: String,
    problemName: String,
    problemStatement: String,
    problemInputFormat: String,
    problemOutputFormat: String,
    problemConstraint: String,
    timeLimit: Number,
    sampleTestCase: testCaseSchema,
    author: [String],
    tags: [String]
});

const problemObject = (mongoose.models.problems) ? mongoose.models.problems : mongoose.model("problems", problemSchema);

export default problemObject;