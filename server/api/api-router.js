const express = require('express')
const repository = require('../in-memory/tech-repository')

const router = express.Router()

router.get('/tech', (req, res) => res.json(repository.techRepository.get()))
router.post('/tech/:id/votes', (req, res) => {
  repository.votesRepository.add(req.params.id, req.body)
  res.sendStatus(201)
})
router.get('/tech/:id/votes', (req, res) => res.json(repository.votesRepository.get(req.params.id)))

module.exports = router
