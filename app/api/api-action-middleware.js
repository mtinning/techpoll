export default repo => _ => next => action => {
  switch (action.type) {
    case 'VOTE':
      repo.addVote(action.item.get('id'), action.vote)
      break
    default:
  }
  return next(action)
}
