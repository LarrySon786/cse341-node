const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId;

/***
*******************
GET ROUTES FUNCTIONS
*******************
***/

// GET ALL FUNCTION
const getAll = async (req, res) => {
    //#swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().db('contacts-project').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts)

    });
}

// GET SINGLE FUNCTION
const getSingle = async (req, res) => {
    //#swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db('contacts-project').collection('contacts').find({ _id: userId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0])

    });
}


/***
*******************
POST ROUTES FUNCTIONS
*******************
***/

const createContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const result = await mongodb.getDatabase()
        .db('contacts-project')
        .collection('contacts')
        .insertOne(newContact);
    
    if (result.acknowledged > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(result.error || 'An error occurred while adding this contact')
    }
}


/***
*******************
UPDATE ROUTES FUNCTIONS
*******************
***/

const updateContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new ObjectId(req.params.id)
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const result = await mongodb.getDatabase()
        .db('contacts-project')
        .collection('contacts')
        .replaceOne({ _id: contactId } , newContact);
    
    if (result.modifiedCount > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(result.error || 'An error occurred while updating this contact')
    }
}

/***
*******************
DELETE ROUTES FUNCTIONS
*******************
***/

const deleteContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new ObjectId(req.params.id)

    const result = await mongodb.getDatabase()
        .db('contacts-project')
        .collection('contacts')
        .deleteOne({ _id: contactId });
    
    if (result.deletedCount > 0) {
        res.status(204).send()
    } else {
        res.status(500).json(result.error || 'An error occurred while deleting this contact')
    }
}


module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact

}

