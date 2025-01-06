const mongoose = require("mongoose")

// Define the Courses schema
const classSchema = new mongoose.Schema({
  courseName: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "course"
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  day: {
    type: String,
  },
  topicName:{
    type:String,
    require:true,
  },
  startTime:{
    type:Date,
    require:true,
  },
  endTime:{
    type:Date,
    require:true,
  },
  BatchName:{
    type:Number,
    require:true,
  }

})

// Export the Courses model
module.exports = mongoose.model("Class", classSchema)
