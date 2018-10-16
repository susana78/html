const http = require('http')

const port = 3000

/*const serve = http.createServer( (request, response)=> {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>ksjdhkjdf</h1>')
})
serve.listen
*/
http.createServer( (request, response)=> {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>ksjdhkjdf</h1>')
}).listen(port)

console.log('server ejecutandose en http:/localhost:' + port)
