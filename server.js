
// create a server using express-

const express = require('express')
const app = express()
//console.log(express)

const PORT = 3000


// 1. Headers of request contain additional info about request.
app.get('/', (req, res) => {
    console.log(req.headers)
    res.send("GET")
})


//2. Basic security to check from where(user-agent) request is coming?

app.get('/', (req, res) => {
    console.log(req.headers['user-agent'])
    if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") res.send("GET")
    else res.send("BLOCKED")
})


//3. Middleware - a more logical way for security check.

const verify = (req, res, next) => {
    if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next()
    else res.send("BLOCKED")
}

app.get('/', verify, (req, res) => {
    //console.log(req)
    res.send("Hi!")
})



app.listen(3000, () => {
    console.log(`Server listening at PORT ${PORT}`)
}) 