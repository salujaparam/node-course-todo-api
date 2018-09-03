var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const  port = 41952 || 3000;

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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});


// GET /todos/ 132321

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send({});
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(400).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
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
