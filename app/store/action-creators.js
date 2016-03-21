export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
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

export function viewVotes(item) {
  return {
    type: 'VIEW_VOTES',
    item,
  }
}

export function closeVotes() {
  return {
    type: 'CLOSE_VOTES',
  }
}
