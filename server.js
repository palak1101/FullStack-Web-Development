const http = require('http')
const fs = require('fs')
const path = require('path')
//console.log(http)


// create a http server and send response over it-

const server = http.createServer((request, response) => {
    //console.log(request.method)
    const markup = fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    response.end()
})

//console.log(server)

server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})


