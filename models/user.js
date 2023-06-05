import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userID: String,
    firstName: String,
    lastName: String,
    emailID: String,
    password: String,
    codechefID: String,
    codeforcesID: String,
    questionsSolved: [String]
})

const userObject=(mongoose.models.users) ? (mongoose.models.users) : (mongoose.model('users', userSchema)); 

export default userObject;