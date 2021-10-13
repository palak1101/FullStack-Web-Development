
// creating server using express-

const express = require('express')
console.log(express)
const PORT = 3000
const app = express()

// app.get('/', (req, res) => {
//     res.send('Server up and running')
// })


//1. If a request is legit that means get request which we have allowed - that means from thunderclient but not chrome.
// app.get('/', (req, res) => {
//     console.log(req)
//     if(req.headers['user-agent'] ==="Thunder Client (https://www.thunderclient.io)") res.send('GET')
//     else res.send("BLOCKED")
// })



//2. checks if request is from thunder client if yes moves it ahead to callback otherwise show blocked.
const verify = (req, res, next) => {
    console.log(req)
    if(req.headers['user-agent'] ==="Thunder Client (https://www.thunderclient.io)") next()
    else res.send("BLOCKED")
}

app.get('/', verify, (req, res) => {
    res.send("VERIFIED")
})



// app.post('/', (req, res) => {
//     res.send("Login form")
// })

// app.patch('/', (req, res) => {
//     res.send("Patch")
// })

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})