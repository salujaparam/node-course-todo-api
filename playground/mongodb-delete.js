//const MongoCLient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

// deleteMany'
// db.collection('Todos')
// .deleteMany({text: 'Eat lunch'})
// .then((result) => {
//   console.log(result);
// }, (err) => {
//   console.log('could not delete');
// });


//deleteOne

// db.collection('Todos')
// .deleteOne({text: 'Eat lunch'})
// .then((result) => {
//   console.log(result);
// }, (err) => {
//   console.log('couldnt delete');
// });

//findOneAndDelete

// db.collection('Todos')
// .findOneAndDelete({completed: false})
// .then((result) => {
//   console.log(result);
// });

// db.collection('Users')
// .deleteMany({name: 'Param'})
// .then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('could not delete');
// });

db.collection('Users')
.findOneAndDelete({name: 'param'})
.then((res) => {
  console.log(res);
});
  //db.close();
});
