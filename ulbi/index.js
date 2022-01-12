const http = require('http')

const PORT = process.env.PORT || 5500;

const server = http.createServer((req, res) => {
    // res.writeHead(200,{
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    
    res.writeHead(200,{
        'Content-type': 'application/json'
    })
    
    if(req.url === '/users') {
        return res.end(JSON.stringify([
            {id: 1, name: 'Ulbi tv'}
        ]))
    }
    if(req.url === '/posts') {
        return res.end('POSTS')
    }
    
    res.end(req.url)
    
   // res.end('<h1>Сервер работает!</h1>')
})

server.listen(PORT, () =>console.log(`Server started on PORT ${PORT}`))