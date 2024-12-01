import mongoose, { Schema } from "mongoose";

const LessonSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    content: String
});

module.exports = mongoose.model("Lesson", LessonSchema);