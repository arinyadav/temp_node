const http = require('http')
const server = http.createServer((req,res) => {
console.log(req)
res.write('Hello Sir!')
res.end()
})

server.listen(5000)