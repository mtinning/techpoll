import $ from 'jquery'

export default {
  getTech: (onSuccess) => $.get('/api/tech', onSuccess),
  addVote: (item, vote, onSuccess) => {
    $.post(`/api/tech/${item.id}/votes`, vote,
      (data) => {
        if (onSuccess) {
          onSuccess(data)
        }
      })
  },
}
