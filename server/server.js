const express = require('express');
const db = require('./db');
const Person = require('./models/Person.js');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PersonRoute = require('./routes/personRoutes.js');
app.use('/person', PersonRoute);


app.listen(5000, ()=>{
    console.log('Server listening at port 5000');
})