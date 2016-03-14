const tech = [
  { name: 'React', category: 'Web Front-End', score: 0 },
  { name: 'Angular 1.4', category: 'Web Front-End', score: 0 },
  { name: 'Angular 2', category: 'Web Front-End', score: 0 },
  { name: 'Aurelia', category: 'Web Front-End', score: 0 },
  { name: 'NodeJS', category: 'Web Back-End', score: 0 }
]

const techRepository = {
  get: () => tech
}

module.exports = techRepository
