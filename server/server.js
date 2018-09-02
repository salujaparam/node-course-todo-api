var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};


// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo');
// });




// var newUser = new User({
//   email: 'salujaparam@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('error');
// });
