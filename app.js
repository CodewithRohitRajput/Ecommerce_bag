const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.semd("hey ! ");
})

app.listen(port, ()=>{
    console.log("Server");
})