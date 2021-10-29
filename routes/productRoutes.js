const database = require('../database/db')
const {v4: uuidv4} = require('uuid')
const express = require('express') 
const router = express.Router() 



// GET Request from user to read products in each category-
router.get('/all', (req, res) => {
    try {
        res.json({
            products: database.products,
            message: "Successfully fetched products",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            products: [],             
            message: error.message,
            status: "FAILED"
        })
    }
})



// POST Request to add products in each category-
router.post('/add', (req, res) => {

    const {name, price, category} = req.body

    if(!database.categories.find(item => item.name === category)){

        //create new category if it doesn't exists
        let newCategory = {name:category, id:uuidv4}
        database.categories.push(newCategory)

        //create a product and add in it
        const newProduct = {name, price, category: category, id: uuidv4()}
        database.products.push(newProduct)
    }
    else{

        const newProduct = {name, price, category: category, id: uuidv4()}
        database.products.push(newProduct)

    }

    try {
        res.json({
            products: database.products,
            message: "Successfully fetched products",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            products: [],             
            message: error.message,
            status: "FAILED"
        })
    }
})






module.exports = router