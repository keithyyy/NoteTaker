//  Dependencies

const express = require('express');
const path = require('path');
const { urlencoded } = require('body-parser');

// Setting up express

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('Develop/public'));


// ROUTER
// Our "route" html files that'll map how we respond when a user visits a specific URL
require('./Develop/public/apiRoutes')(app);
require('./Develop/public/htmlRoutes')(app);



app.listen(PORT, () =>  console.log(`App listening on PORT ${PORT}`));
