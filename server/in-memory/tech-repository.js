const createSummary = require('../data/tech-summariser')

const allTech = [
  { name: 'React', id: 'react_web', categoryId: 'web', votes:
    [{score: 1, comment: 'I like react'}, {score: -1, comment: 'I do not like react'} ] },
  { name: 'Angular 1.4', id: 'angular_1_4_web', categoryId: 'web', votes:
    [{score: 1, comment: 'I like Angular 1.4'}, {score: -1,comment: 'I do not like Angular 1.4'} ] },
  { name: 'Angular 2', id: 'angular_2_web', categoryId: 'web', votes:
    [{score: 1, comment: 'I like Angular 2'}, {score: -1, comment: 'I do not like Angular 2'} ] },
  { name: 'Aurelia', id: 'aurelia_web', categoryId: 'web', votes:
    [{score: 1, comment: 'I like Aurelia'}, {score: -1, comment: 'I do not like Aurelia'} ] },
  { name: 'NodeJS', id: 'nodejs_back_end', categoryId: 'back_end', votes:
    [{score: 1, comment: 'I like NodeJS'}, {score: -1, comment: 'I do not like NodeJS'} ] },
  { name: 'Docker', id: 'docker', categoryId: 'dev_ops', votes:
    [{score: 1, comment: 'I like Docker'}, {score: -1, comment: 'I do not like Docker'} ] },
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
  },
  get: (techId) => {
    const tech = allTech.filter(t => t.id == techId)[0]
    if (tech) {
      return tech.votes
    }
  },
}

module.exports = { techRepository, votesRepository }
