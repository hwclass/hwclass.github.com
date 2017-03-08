//Packages
const path = require('path');
const express = require('express');

//create express instance
const app = express();

//set static dir as public
const PUBLIC = path.join(__dirname, 'public');
app.use(express.static(PUBLIC));

//start server
app.listen(8888);
