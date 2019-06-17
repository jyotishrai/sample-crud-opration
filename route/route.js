

//require express 
const express = require ("express");
const router = express.Router();


// Require the controllers
const  crudController = require('../controller/crudController');


// a simple test url to check that all of our files are communicating correctly.
router.post('/test', crudController.crudcreate);
router.post('/id', crudController.crudRead);
router.post('/id/update', crudController.crudUpdate);
router.post('/delete', crudController.crudDelete);

module.exports = router;