// const http = require('http')
// const EventEmiter = require('events')
// const Router = require('./framework/Router')
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')
// const {Router} = require('express')

// const emitter =  new EventEmiter()

const PORT = process.env.PORT || 5500;

// const server = http.createServer((req, res) => {
    // res.writeHead(200,{
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    
    // res.writeHead(200,{
    //     'Content-type': 'application/json'
    // })
    //
    // if(req.url === '/users') {
    //     return res.end(JSON.stringify([
    //         {id: 1, name: 'Ulbi tv'}
    //     ]))
    // }
    // if(req.url === '/posts') {
    //     return res.end('POSTS')
    // }
    //
    // res.end(req.url)
    
   // res.end('<h1>Сервер работает!</h1>')
// })



const app = new Application()

//const router = new Router()

// router.get('/users', (req, res) => {
//     res.end('YOU SEND REQUEST TO /USERS')
// })
//
// router.get('/posts', (req, res) => {
//     res.end('YOU SEND REQUEST TO /POSTS')
// })

app.use(jsonParser)
app.use(parseUrl('http://localhost:5500/'))

app.addRouter(userRouter)

app.listen(PORT, () =>console.log(`Server started on PORT ${PORT}`))

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:1234@cluster0.eav3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () =>console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

// const server = http.createServer( )
// server.listen(PORT, () =>console.log(`Server started on PORT ${PORT}`))