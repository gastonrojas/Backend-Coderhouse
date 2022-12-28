import cluster from 'cluster';
import os from 'os'
import parseArgs from 'minimist'

import createServer from "./server.js";

const options = { default: {PORT: 8080, MODE: 'fork'}, alias: {p: "PORT", m: "MODE"}}
const args = parseArgs(process.argv.slice(2), options)

export const numCpus = os.cpus().length

const PORT = args.PORT

if (args.MODE === 'cluster'){
    if(cluster.isPrimary){
      console.log(`Pirmary ${process.pid} process is runing.`)
      for (let i = 0; i < numCpus; i++){
        cluster.fork()
      }
      
      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
      })

    } else{
      try {
        const server = await createServer(PORT);
        console.log(`Servidor express escuchando en el puerto ${server.address().port} - PID WORKER ${process.pid}`)
      } catch (error) {
        console.log(error)
      }
    }
  } else{
    try {
      const server = await createServer(PORT);
      console.log(`Servidor express escuchando en el puerto ${server.address().port} - PID WORKER ${process.pid}`)
    } catch (error) {
      console.log(error)
    }
  }

