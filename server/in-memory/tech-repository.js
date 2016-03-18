const createSummary = require('../data/tech-summariser')

const allTech = [
  { name: 'React', id: 'react_web', categoryId: 'web', votes: [] },
  { name: 'Angular 1.4', id: 'angular_1_4_web', categoryId: 'web', votes: [] },
  { name: 'Angular 2', id: 'angular_2_web', categoryId: 'web', votes: [] },
  { name: 'Aurelia', id: 'aurelia_web', categoryId: 'web', votes: [] },
  { name: 'NodeJS', id: 'nodejs_back_end', categoryId: 'back_end', votes: [] },
  { name: 'Docker', id: 'docker', categoryId: 'dev_ops', votes: [] },
]

function createVote(vote) {
  return { score: parseInt(vote.score), comment: vote.comment }
}

const techRepository = {
  get: () => allTech.map(createSummary),
  add: (item) => allTech.push({
    name: item.name,
    id: item.id,
    categoryId: item.categoryId,
    votes: []
  }),
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
