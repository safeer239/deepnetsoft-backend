const express =require('express');
const { addItem, getAllItems } = require('../controller/itemsController');

const router = express.Router()

router.post('/addItem', addItem)
router.get('/getAllItems', getAllItems);

module.exports = router;