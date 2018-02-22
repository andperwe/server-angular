var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  role: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
