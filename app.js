const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-Connection');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());

app.use('/owners' , ownersRouter);
app.use('/users' , usersRouter);
app.use('/products' , productsRouter);

app.listen(port, ()=>{
    console.log("Server");
})