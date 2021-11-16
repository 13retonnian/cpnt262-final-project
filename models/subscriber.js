//install modules
const mongoose = require('mongoose');

/*****************/
/* Define Schema */
/*****************/

const subscriberSchema = new mongoose.Schema({
  type: String,    
  email: String
})

/*****************/
/* Compile Model */
/*****************/

module.exports = mongoose.model('Subscriber', subscriberSchema)