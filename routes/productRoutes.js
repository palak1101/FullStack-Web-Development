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



// DELETE Request to delete categories-
router.delete('/delete/:id', (req, res) => {
    try {

        const {id} = req.params
        const newProducts = database.products.filter(item => item.id !== id)
        database.products = newProducts

        res.json({
            products: newProducts,
            message: "Successfully removed product",
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



//PUT Request to update category properties-
router.put('/update/:id', (req, res) => {
    try {

        const {id} = req.params
        const {newName, newPrice} = req.body
        let updateProduct = database.products.find(item => item.id === id)
        const index = database.products.indexOf(updateProduct)
        if(updateProduct) database.products[index].name = newName , database.products[index].price = newPrice
        else console.log("Name already exists!!")

        res.json({
            products: database.products,
            message: "Successfully updated product",
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