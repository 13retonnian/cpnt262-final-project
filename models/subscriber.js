const mongoose = require('./db')

/*****************/
/* Define Schema */
/*****************/

const subscriberSchema = new mongoose.Schema({
  name: String,
  email: String
})

/*****************/
/* Compile Model */
/*****************/

module.exports = mongoose.model('Subscriber', subscriberSchema)