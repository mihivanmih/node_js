// const users = [
//     {id: 1, name: 'Oleg'},
//     {id: 2, name: 'Lena'}
// ]

const User = require('./user-model')

const getUsers = async (req, res) => {
    let users
    if(req.params.id) {
        users = await User.findById(req.params.id)
    } else {
        users = await User.find()
    }
    // console.log(req.params)
    // if(req.params.id){
    //     return res.send(users.find(user => user.id == req.params.id))
    // }
    res.end(JSON.stringify(users))
}

const createUser = async (req, res) => {
   // console.log(req.body)
   // const user = req.body
    const user = await User.create(req.body)
    //users.push(user)
    res.end(JSON.stringify(user))
}

module.exports = {
    getUsers,
    createUser
}