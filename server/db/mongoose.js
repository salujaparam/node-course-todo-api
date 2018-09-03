var mongoose = require('mongoose');


const dbuser = 'paramSaluja';
const dbpassword = 'stoneparam12';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds141952.mlab.com:41952/node-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
