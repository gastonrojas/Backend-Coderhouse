import cluster from 'cluster';

import createServer from './server.js'
import { numCpus, PORT, MODE} from './config.js';

if (MODE === 'cluster'){
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

