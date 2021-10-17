
// create a server using express-

const express = require('express')
const app = express()
//console.log(express)

const PORT = 3000


// 1. Signup/Login Backend-
app.use(express.json())


app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send("dummy website data")
})


app.listen(3000, () => {
    console.log(`Server listening at PORT ${PORT}`)
}) 