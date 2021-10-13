
// creating server using express-

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.url)
    res.send("This is a response")
})

app.get('/login', (req, res) => {
    console.log(req.url)
    res.send("This is a Login Page")
})

app.get('/signup', (req, res) => {
    console.log(req.url)
    res.send("This is a Signup Page")
})

app.listen(3000, () => {
    console.log("server listening at PORT 3000")
})