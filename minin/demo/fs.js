// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err
//     }
//     console.log("папка создана")
// })

 const filePath = path.join(__dirname, 'text.txt')

// fs.writeFile(filePath, 'Привет как дела?', err => {
//     if(err){
//         throw err
//     }
//     console.log('File creating')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content', data.toString())
     console.log('Content', content)
})