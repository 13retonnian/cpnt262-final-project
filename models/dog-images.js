//install modules
const mongoose = require('mongoose');

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