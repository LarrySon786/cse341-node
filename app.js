const express = require('express');
const app = express();
const routes = require('./routes/')
const contactsRoute = require('./routes/contacts')
const mongodbRoutes = require('./data/database');


// LEFT OFF ON SECOND TO LAST VIDEO FOR WEEK 1 PROJECT



// HOME PAGE ROUTE
app.use('/', routes)

// CONTACTS ROUTE
app.use('/contacts', contactsRoute)


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

