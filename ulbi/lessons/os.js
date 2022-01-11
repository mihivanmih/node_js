const os = require('os')
const cluster = require('cluster')

 console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

if(cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
        //console.log('Запустить еще один node js процесс')
    }
    cluster.on('exit', (worker) => {
        console.log(`Воркер с pid= ${worker.process.pid} умер`)
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid= ${process.pid} запущен`)
    
    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} еще работает`)
    }, 5000)
}

// const cpus = os.cpus()

