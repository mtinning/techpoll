const express = require('express')
const techRepository = require('./tech-repository')

const router = express.Router()

router.get('/tech', (req, res) => res.json(techRepository.get()))

module.exports = router
