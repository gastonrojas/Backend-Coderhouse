import { fork } from 'child_process'


const randomsController = (req, res) =>{

    let CANT = req.query.cant ?? 100000

    const forked = fork('src/api/random.js')

    forked.on('message', msg=>{
        if (msg === 'listo'){
            forked.send(CANT)
        } else {
            res.json({PID_WORKER: process.pid , msg})
        }
    })

}


export default randomsController