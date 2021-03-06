const express = require('express')
const repository = require('../in-memory/tech-repository')

const router = express.Router()

router.get('/tech', (req, res) => {
  res.json(repository.techRepository.get())
})
router.post('/tech', (req, res) => {
  repository.techRepository.add(req.body)
  res.sendStatus(201)
})
router.post('/tech/:id/votes', (req, res) => {
  repository.votesRepository.add(req.params.id, req.body)
  res.sendStatus(201)
})
router.get('/tech/:id/votes', (req, res) => {
  setTimeout(
  	() => res.json(repository.votesRepository.get(req.params.id)), 
  	Math.random() * 5000)
})

module.exports = router
