let usersList = require('../usersList')

const getUser = (req, reply) =>{
    const {id} = req.params
    const user = usersList.find((user) => user.id == id)
    if(!user){
        reply.code(404).send({message: 'No user with this id'})
    }
    reply.send(user)
}

const getUsers = (req, reply) =>{
    reply.send(usersList)
}

const createUser = (req, reply) =>{
    const {name} = req.body
    console.log(name)
    const id = usersList.length
    const newUser = {
        name,
        id
    }
    usersList.push(newUser)
    reply.code(201).send(newUser)
}

const updateUser = (req, reply) =>{
    const id = req.params.id
    const name = req.body.name

    usersList = usersList.map((user) => ( user.id == id ? {name, id} : user))
    const updatedUser = usersList.find((user)=> user.id == id)
    console.log(updatedUser)

    reply.send(updatedUser)
}

const deleteUser = (req, reply) =>{
    const id = req.params.id
    usersList = usersList.filter((user) => user.id !== id)
    reply.send({message: `User with ${id} as be deleted`})
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}