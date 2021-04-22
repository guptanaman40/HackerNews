const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./Routes');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 4000;

app.use('/',routes);

mongoose.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to database');
    app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`);
    })
}).catch(e=>{
    console.log(e);
})

app.get('/',(req,res)=>{
    console.log('Iam last');
    res.status(200).json({
        message:"hello world!"
    })
})

// app.get('/data',(req,res)=>{
//     res.status(200).json(data);
// })

// app.post('/data',(req,res)=>{
//    const {name,age} = req.body;
//     data.name=name;
//     data.age=age;
//     res.status(200).json(data)
// })


// const {name,age} ={
//     name:"aasds",
//     age:"21"
// }

// console.log(name,age);




