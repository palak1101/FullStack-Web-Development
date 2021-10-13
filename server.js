//working of nodemon
// console.log("message")
// console.log("After nodemom")
// console.log("Hi!")

//Creating a HTTP Server-
const http = require('http')
//console.log(http)

const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    // console.log(request.url)
    // console.log(request.headers)
    //console.log(request.method)
    const markup = fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    //const path = request.url
    //response.write(`You made a request to ${path}`)
    //response.write('hi!')
    //response.write(`<h2>I'm a heading</h2>`)
    response.end()
})

server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})

//console.log(server)
