const fastify = require('fastify')({logger: true})
fastify.register(require('./routes/users'))

//SERVER CREATION
const start = () =>{
    try{
        fastify.listen({port: 5000})
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

//SEVER START
start()