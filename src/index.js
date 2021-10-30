const http = require('http')
const PORT = 3000

const handler = (request, response) => {
    const { url, method } = request
    const [ firt, route, id ] = url.split('/')
    request.queryString = { id: isNaN(id) ? id : Number(id) }
    
    const key = `/${route}:${method.toLowerCase()}`
    
    response.end()
}

http.createServer(handler)
    .listen(PORT, () => console.log('server is running at', PORT))