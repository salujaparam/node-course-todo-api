var mongoose = require('mongoose');



mongoose.Promise = global.Promise;

const uri = "mongodb://param:stoneparam12@ds243502.mlab.com:43502/todoapp";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
module.exports = {
  mongoose
};
