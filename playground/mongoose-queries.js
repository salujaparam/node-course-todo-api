const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;

var uid = '5b8b5454b9c8a11810feeb69';

if(!ObjectID.isValid(uid)){
  console.log('ID not valid');
}

// User.find({
//   _id: uid
// }).then((users) => {
//   console.log('users', users);
// });

// User.findOne({
//   _id: uid
// }).then((user) => {
//   console.log('User => ', user);
// });

User.findById(uid).then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
//
// var id = '5b8bd9cb248ba2a04a12ee30';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id Not Found');
//   }
//   console.log('Todo By id', todo);
// }).catch((e) => {
//   console.log(e);
// })
