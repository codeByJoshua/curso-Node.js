const http = require('node:http')
const { findAvailablePort } = require('./11.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

/* server.listen(3000, () => {
  console.log('server listening on port 3000')
}) */

// Busca el primer puerto disponible
/* server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.adress().port}`)
}) */
