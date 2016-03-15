const createSummary = require('../data/tech-summariser')

const allTech = [
  { name: 'React', id: 'react_web', categoryId: 'web', votes: [] },
  { name: 'Angular 1.4', id: 'angular_1_4_web', categoryId: 'web', votes: [] },
  { name: 'Angular 2', id: 'angular_2_web', categoryId: 'web', votes: [] },
  { name: 'Aurelia', id: 'aurelia_web', categoryId: 'web', votes: [] }
]

function createVote(vote) {
  return { score: parseInt(vote.score), comment: vote.comment }
}

const techRepository = {
  get: () => allTech.map(createSummary)
}

const votesRepository = {
  add: (techId, vote) => {
    const tech = allTech.filter(t => t.id == techId)[0]
    if (tech) {
      tech.votes.push(createVote(vote))
    }
  }
}

module.exports = { techRepository, votesRepository }
