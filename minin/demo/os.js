const os = require('os')

console.log('Операционка : ', os.platform())
console.log('Архитектура процессора : ', os.arch())
console.log('Процессоры : ', os.cpus())
console.log('Свободная память : ', os.freemem())
console.log('Всего памяти : ', os.totalmem())
console.log('Домашняя директория : ', os.homedir())
console.log('Сколько комп включен в секундах : ', os.uptime())