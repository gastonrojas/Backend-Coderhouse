// const fs = require('fs')
// console.log(fs.readdirSync('.'))

// import('fs').then(({default: fs}) => {
//     console.log(fs.readdirSync('.'))
// })

const cluster = require('cluster');
const parseArgs = require ('minimist')

async function main(){
    const { numCpus } = await import("./config.js");
    const createServer = await import ("./server.js");
    
    const options = { default: {PORT: 8080, MODE: 'fork'}, alias: {p: "PORT", m: "MODE"}}
    const args = parseArgs(process.argv.slice(2), options)
    
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
          createServer(PORT);
        }
      } else{
        createServer(PORT)
      }
}

main()