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

export function addTech(item) {
  return {
    type: 'ADD',
    item
  }
}
