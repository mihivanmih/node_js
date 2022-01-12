const Emitter = require('events')
const dotenv = require('dotenv')
dotenv.config()

const emitter = new Emitter()

const callback = (data, second, third) => {
    console.log('Вы прислали сообщение '+ data)
    console.log('Второой аргумент '+ data)
}

//emitter.on('message', (data, second, third) => {
emitter.once('message', callback)

emitter.emit('message')
emitter.emit('message')
emitter.emit('message')

emitter.removeAllListeners() // удаляет всех слушателей
emitter.removeListener('message', callback)

const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}