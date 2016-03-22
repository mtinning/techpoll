import $ from 'jquery'

export default {
  getTech: () => $.get('/api/tech').promise(),
  addVote: (itemId, vote) => $.post(`/api/tech/${itemId}/votes`, vote).promise(),
  addNewTech: (item) => $.post('/api/tech', item).promise(),
  getVotes: (itemId) => $.get(`/api/tech/${itemId}/votes`).promise(),
}
