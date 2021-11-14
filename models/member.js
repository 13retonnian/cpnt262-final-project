//install modules
const mongoose = require('./db')

/*****************/
/* Define Schema */
/*****************/

const teamSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String,
})

/*****************/
/* Compile Model */
/*****************/

module.exports = mongoose.model('Team', teamSchema)