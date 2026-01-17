const express = require('express');
const app = express();
const routes = require('./routes/')
// const contactsRoute = require('./routes/contacts')
const mongodbRoutes = require('./data/database');
const bodyParser = require('body-parser');



app.use(bodyParser.json());

// SWAGGER Header Rules being set
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Orgin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Orgin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

// HOME PAGE ROUTE
app.use('/', routes)

// MONGODB connection
mongodbRoutes.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => {
            console.log(`Mongodb connected. Listening on port: ${HOST}:${PORT}`)
        })
    }
})


// SERVER HOST INFORMATION
const port = process.env.PORT
const host = process.env.HOST
const HOST = 'localhost'
const PORT = 3000

