const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer( (req, res) => {
    
    // res.writeHead(200, {
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    //
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(data)
    //     })
    // }
    //
    // if(req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(data)
    //     })
    // }
    
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'
    
    switch (ext) {
        case '.css':
            console.log("css")
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }
    
    if(!ext) {
        filePath += '.html'
    }
    
    
    fs.readFile(filePath, (err, content) => {
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if(err) {
                    throw err
                }
                res.writeHead(200, {
                    'Content-type': 'text/html; charset=utf-8'
                })
                res.end(data)
            })
        } else {
            res.writeHead(200, {
                'Content-type': contentType
            })
            res.end(content)
        }
       
    })
    
    console.log(filePath)
    
})

const PORT = process.env.port || 3400

server.listen(PORT, () => {
    console.log('Server has been started')
})