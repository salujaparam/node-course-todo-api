var mongoose = require('mongoose');


const dbuser = 'param';
const dbpassword = 'stoneparam12';
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/TodoApp');
module.exports = {
  mongoose
};
