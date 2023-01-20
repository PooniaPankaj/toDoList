


const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/toDo');

 
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());

app.get('/',function(req,res){
    Todo.find({},function(err,task){
        if (err){
            console.log("Error in fetching task!");
            return ;
        }
        return  res.render('home',{
            tasks:task
        });
        
    })
    // return  res.render('home',{
    //     name:"Pankaj",
    //     contact_list:contactList
    // });

});

app.post('/create_task',(req,res)=>{
    console.log(req.body);
    Todo.create({    
        description:req.body.description,
        type:req.body.type, 
        date:req.body.date
    },function(err,newTask){
         if (err){console.log("error in creating a contact !");
        return ;}

        console.log("******",newTask);
        return res.redirect('back');
    })
    // contactList.push(
    //     req.body
    // )
    // return res.redirect('back');


});
app.get('/delete-task/:id',function(req,res){
    let id = req.params.id;
    console.log(id);
    // find the contact in the database using id and delete
    Todo.findByIdAndDelete(id,function(err){
        if (err){
            console.log("error in deleting data from database");
            return ;
        }
        return res.redirect('back');
    });

});



app.listen(port,function(err){
    if (err){
        console.log("Error ",err);
    }
    console.log("Express server running perfectly on Port",port);
})
