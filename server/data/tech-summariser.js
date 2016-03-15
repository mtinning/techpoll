function createSummary(tech) {
  return {
    name: tech.name,
    id: tech.id,
    categoryId: tech.categoryId,
    score: tech.votes.reduce((score, current) => score += current.score, 0)
  }
}

module.exports = createSummary
