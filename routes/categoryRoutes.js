const database = require('../database/db')
const {v4: uuidv4} = require('uuid')
const express = require('express') 
const router = express.Router() 



// GET Request from user to read categories-
router.get('/all', (req, res) => {
    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],             //here, we're sending data as empty array so that frontend doesn't crash, cannot read property error if fetched data = null.
            message: error.message,
            status: "FAILED"
        })
    }
})



// POST Request to add category-
router.post('/add', (req, res) => {
    try {

        const {name} = req.body
        let newCategory = {
            name,
            id: uuidv4()
        }

        let includes = database.categories.find(item => item.name === name)
        if(!includes) database.categories.push(newCategory)
        else console.log("Category already exists!!")
        
        res.json({
            categories: database.categories,
            message: "Successfully added category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],             //here, we're sending data as empty array so that frontend doesn't crash, cannot read property error if fetched data = null.
            message: error.message,
            status: "FAILED"
        })
    }
})


// DELETE Request to delete categories-
router.delete('/delete/:id', (req, res) => {
    try {

        const {id} = req.params
        // let element = database.categories.find(item => item.id === id)
        // const index = database.categories.indexOf(element)
        // database.categories.splice(index, 1)

        const newCategories = database.categories.filter(item => item.id !== id)
        database.categories = newCategories

        res.json({
            categories: newCategories,
            message: "Successfully removed category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],             
            message: error.message,
            status: "FAILED"
        })
    }  
})



//PUT Request to update category properties-
router.put('/update/:id', (req, res) => {
    try {

        const {name} = req.params
        const {newName} = req.body
        let update = database.categories.find(item => item.name === name)
        const index = database.categories.indexOf(update)
        if(update) database.categories[index].name = newName
        else console.log("Name already exists!!")

        res.json({
            categories: database.categories,
            message: "Successfully updated category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],             
            message: error.message,
            status: "FAILED"
        })
    }  
})




module.exports = router