const http = require('http')
const fs = require('fs')
const path = require('path')
//console.log(http)


// create a http server and send response over it-

const server = http.createServer((request, response) => {
    //console.log(request.method)
    const {url} = request
    if(url == '/login'){
        response.write('<h1> Login Page </h1>')
        response.end()
    }
    if(url == '/signup'){
        response.write('<h1> Signup Page </h1>')
        response.end()
    }
})

//console.log(server)

server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})


