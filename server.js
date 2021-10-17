
// create a server using express-

const express = require('express')
const app = express()
//console.log(express)

const PORT = 3000


// 1. 

const isAdmin = (req, res, next) => {
    if(req.headers.admin === "true") next()
    else res.send("ACCESS DENIED!!!")
}


app.get('/public', (req, res) => {
    console.log(req.headers)
    res.send("I'm a public route")
})

app.get('/private', isAdmin, (req, res) => {
    res.send("I'm a private route")
})



app.listen(3000, () => {
    console.log(`Server listening at PORT ${PORT}`)
}) 