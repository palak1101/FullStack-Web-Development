const http = require('http')
//console.log(http)


// create a http server and send response over it-

const server = http.createServer((request, response) => {
    //console.log(request.method)
    const path = request.url
    response.write(`You made a request to ${path}`)
    response.end()
})

//console.log(server)

server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})


