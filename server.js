const express = require('express');
const fs = require('fs')
const { notes } = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3002;

// api routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// routes to everything in our public dir
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});
