export default repo => store => next => action => {
  switch (action.type) {
    case 'VOTE':
      repo.addVote(action.item, action.vote)
  }
  return next(action)
}
