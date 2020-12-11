// build your `/api/resources` router here
const express = require('express')

const model = require('./model')

const router = express.Router()

router.get('/', async (_, res) => {
    try {
        const data = await model.getAll()

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await model.insert(req.body)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(err.message)
    }
})

module.exports = router