const Item = require('../model/itemsModel')

const addItem = async (req,res) => {
    try {
        const { itemName, price, description, category } = req.body;
        console.log('req.body: ', req.body);

    if (!itemName || !price || !description || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }
        const newItem = new Item({
            itemName,
            price,
            description,
            category
        });
        
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error creating item', error: error.message}) ;
    }
}


const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving items', error: error.message });
    }
};

module.exports = { addItem, getAllItems}