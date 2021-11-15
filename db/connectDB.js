//
// Connect to the MongoDB
//
const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Hello1234:Hello1234@cluster0.g0emp.mongodb.net/fantastic-four-dogs?retryWrites=true&w=majority"

const connectDB = async () => {
  
  await mongoose.connect(
    MONGODB_URL, 
    { useUnifiedTopology: true, useNewUrlParser: true }
  )

  console.log('Connected to the Cloud MongoDB...!')
}

module.exports = connectDB