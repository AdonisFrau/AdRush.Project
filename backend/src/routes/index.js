const express = require('express');
const router = express.Router();

// Import controllers
const someController = require('../controllers/index');

// Define routes
router.get('/some-endpoint', someController.someFunction);
router.post('/another-endpoint', someController.anotherFunction);

// Export the router
module.exports = router;