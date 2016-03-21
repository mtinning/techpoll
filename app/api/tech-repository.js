import $ from 'jquery'

// Returns a function that calls the provided function if it is defined
const callIfDefined = (fn) => (data) => {
  if (fn) {
    fn(data)
  }
}

export default {
  getTech: (onSuccess) => $.get('/api/tech', callIfDefined(onSuccess)),
  addVote: (itemId, vote, onSuccess) => {
    $.post(`/api/tech/${itemId}/votes`, vote, callIfDefined(onSuccess))
  },
  addNewTech: (item, onSuccess) => {
    $.post('/api/tech', item, callIfDefined(onSuccess))
  },
}
