const router = require('express').Router();
const contactsRoute = require('./contacts')

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World')
})

// CONTACTS ROUTE
router.use('/contacts', contactsRoute)

module.exports = router;