//install modules
const mongoose = require('./db')

/*****************/
/* Define Schema */
/*****************/

const dogImagesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  imgURL: String,
  width: Number,
  height: Number,
});

/*****************/
/* Compile Model */
/*****************/

module.exports = mongoose.model('Dog-Image', dogImagesSchema)