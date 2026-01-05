const express = require('express');
const app = express();
const routes = require('./routes/')


// HOME PAGE ROUTE
app.use('/', routes)


// SERVER HOST INFORMATION
const port = process.env.PORT
const host = process.env.HOST
const HOST = 'localhost'
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port: ${HOST}:${PORT}`)
})