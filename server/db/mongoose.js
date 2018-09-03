var mongoose = require('mongoose');


// const dbuser = 'paramSaluja';
// const dbpassword = 'stoneparam12';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');
module.exports = {
  mongoose
};
