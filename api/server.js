const express = require('express')

const server = express()

const projectRouter = require('./project/router')

const resourceRouter = require('./resource/router')

const taskRouter = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectRouter)

server.use('/api/resources', taskRouter)

server.use('/api/tasks', resourceRouter)

server.get('/', (_, res) => {
    res.status(200).json('Welcome to my api')
})

module.exports = server