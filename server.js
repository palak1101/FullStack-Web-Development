// BASIC ECOMMERCE BACKEND

// create a server using express-

const { json } = require('express')
const express = require('express')
const app = express()

//console.log(express)
const PORT = 3000

app.use(express.json())

const token = "TOP_SECRET"


//Array as Database
let products = [{name: "iPhone12 Case", price: '999'}, {name: "iPhone13 Case", price: '1199'}, {name: "iPhone13 Pro Case", price: '1499'}]




//middleware - server validation
//1.
const validator = (req, res, next) => {
    const {name, price} = req.body

    if (!name || !price) res.json({error: "validation failed!"})
    else next()
}

//2.
const isAuthorized = (req, res, next) => {
    if(req.headers.authorisation === token){
        next()
    }
    else res.json({error: "UNAUTHORIZED"})
}




//-----------------------------PUBLIC ROUTE--------------------------------
//This route is a get route to send products-
app.get('/products', (req, res) => {
    res.json({products})
})




//-----------------------------PRIVATE ROUTE--------------------------------
app.post('/products/add', isAuthorized, validator, (req, res) => {
    const {name, price} = req.body   //destructure
    
    const newProduct = {
        name,
        price
    }
    // const newProduct = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    products.push(newProduct)
    res.send("product added")
})

//-----------------------------AUTHENTICATION FOR ACCESSING PRIVATE ROUTE--------------------------------

app.post('/auth', (req, res) => {
    const {email, password} = req.body
    if (email === "admin@mail.com" && password === "password1") 
    res.send({token})
    else{
        res.send({message: "UNAUTHORIZED"})
    }
})





app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})