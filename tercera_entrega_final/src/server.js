import app from './app.js'

const createServer = (PORT) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT)
    server.on('listening', () => resolve(server))
    server.on('error', error => reject(error))
  })
}


export default createServer