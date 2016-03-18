import $ from 'jquery'

export default {
  getTech: (onSuccess) => $.get('/api/tech', onSuccess),
  addVote: (itemId, vote, onSuccess) => {
    $.post(`/api/tech/${itemId}/votes`, vote,
      (data) => {
        if (onSuccess) {
          onSuccess(data)
        }
      })
  },
}
