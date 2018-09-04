const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// Todo.findByIdAndRemove
Todo.findOneAndRemove('5b8dcdd243446c841b9c4c90').then((doc) => {
  console.log(doc)
});

// Todo.findByIdAndRemove('5b8dcdd243446c841b9c4c90').then((doc) => {
//   console.log(doc)
// });
