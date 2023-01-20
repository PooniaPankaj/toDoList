// require the library
const mongoose = require('mongoose');
// connect to thee data base
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
// acquire the connection (to check if it is successful or not)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running 
db.once('open',function(){
    console.log('Succesfully connected to the database');
})