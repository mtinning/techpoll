export default repo => _ => next => action => {
  switch (action.type) {
    case 'VOTE':
      repo.addVote(action.item, action.vote)
      break
    case 'ADD_NEW_TECH':
      repo.addNewTech(action.item)
      break
    default:
  }
  return next(action)
}
