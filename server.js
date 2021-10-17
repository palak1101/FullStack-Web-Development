
// create a server using express-

const express = require('express')
const app = express()
//console.log(express)

const PORT = 3000

app.get('/', (req, res) => {
    //console.log(req.url)
    res.send("Server up and running")
})


//1. post request from chrome doesn't work- because browser only sends get request
app.post('/', (req, res) => {
    //console.log(req.url)
    res.send(`Login Form`)
})

app.get('/', (req, res) => {
    //console.log(req.url)
    res.send(`Login Form`)
})

//2. Different kind of request- with express using thunderclient works well.
app.get('/', (req, res) => {
    res.send(`GET`)
})

app.post('/', (req, res) => {
    res.send(`POST`)
})

app.put('/', (req, res) => {
    res.send(`PUT`)
})

app.patch('/', (req, res) => {
    res.send(`PATCH`)
})

app.delete('/', (req, res) => {
    res.send(`DELETE`)
})


app.listen(3000, () => {
    console.log(`Server listening at PORT ${PORT}`)
}) 