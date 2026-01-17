const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.use('/', require('./swagger'))

// GET Routes
router.get('/', contactsController.getAll)
router.get('/:id', contactsController.getSingle)

// POST Routes
router.post('/', contactsController.createContact)

// Update Routes
router.put('/:id', contactsController.updateContact)

// Delete Routes
router.delete('/:id', contactsController.deleteContact)



module.exports = router;
