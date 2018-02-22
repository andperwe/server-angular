var mongoose = require('mongoose');

var uri = 'mongodb://ds141028.mlab.com:41028/agent';
var options = {
  user: 'agent_user',
  pass: 'Sztand13@$'
}
mongoose.connect(uri, options);

