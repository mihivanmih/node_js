const crypto = require('crypto')
const start = Date.now()

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})