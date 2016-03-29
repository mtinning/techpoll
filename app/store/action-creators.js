export function setTech(tech) {
  return {
    type: 'SET_TECH',
    tech,
  }
}

export function submitVote(item, vote) {
  return {
    type: 'VOTE',
    item,
    vote,
  }
}

export function addNewTech(item) {
  return {
    type: 'ADD_NEW_TECH',
    item,
  }
}

let getVotesSubscription

export const viewVotes = (item, techRepository) => (dispatch) => {
  const action = {
    type: 'VIEW_VOTES',
    item,
  }

  if (getVotesSubscription) {
    getVotesSubscription.unsubscribe()
  }

  // Could dispatch an action here to show a spinner

  getVotesSubscription = techRepository
                          .getVotes(item.get('id'))
                          .subscribe(votes => dispatch({ ...action, votes }))
}

export function openAddVote(item) {
  return {
    type: 'OPEN_ADD_VOTE',
    item,
  }
}

export function closeVotes() {
  return {
    type: 'CLOSE_VOTES',
  }
}

export function closeAddVote(item) {
  return {
    type: 'CLOSE_ADD_VOTE',
    item,
  }
}
