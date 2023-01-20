const mongoose = require('mongoose');
const toDoschema = new mongoose.Schema({
    description:{
        type :String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:String,
        require:true
    }

});

const Todo = mongoose.model('Todo',toDoschema);
module.exports = Todo;