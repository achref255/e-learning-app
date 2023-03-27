const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Course = require('./coursModel');

const studentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
   
  },
  name: {
    type: String,
    
  },
  linkedin: {
    type: String,
    
  },
  university: {
    type: String,
    
  },
  field: {
    type: String,
  
  },
  mycourses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course',
  }],
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)
