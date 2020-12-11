// build your `/api/projects` router here
const express = require('express')

const model = require('./model')

const router = express.Router()

router.get('/', async (_, res) => {
    try {
        const data = await model.getAll()

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

router.post('/', validatePost, async (req, res) => {
    try {
            const data = await model.insert(req.body)
            res.status(201).json(data)
        
    } catch (error) {
        res.status(404).json(error.message)
    }
})

function validatePost(req, res, next) {

    if(!req.body.name) {
        res.status(400).json({message: 'name is required'})
    } else {
        next()
    }
}

module.exports = router