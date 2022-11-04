const os = require('os');
module.exports = {
    apps: [{
        port        : 8080,
        name        : "any",
        script      : "index.cjs", // 👈 CommonJS
        watch       : true,           
        instances   : os.cpus().length,
        exec_mode   : 'cluster',         
        env: {
            NODE_ENV: "production",
        }
    }]
}