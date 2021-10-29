// BASIC ECOMMERCE BACKEND

const express = require('express')
const database = require('./database/db')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(express.json())
//console.log(express)

const PORT = 3000



//console.log(categoryRoutes.stack)
app.use('/category', categoryRoutes)
app.use('/products', productRoutes)





//Server doesn't crash since it get some kind of response.
// app.get('/', (req, res) => {
//     try{
//         console.log(document)
//     }
//     catch(error){
//         res.status(400).send(error.message)
//     }
// })

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`)
})