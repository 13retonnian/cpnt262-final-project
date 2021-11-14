const mongoose = require('./db')

const teamSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String,
})

//const teamList = mongoose.model('Team', teamSchema)

module.exports = mongoose.model('Team', teamSchema)