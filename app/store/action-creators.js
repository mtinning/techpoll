export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(item, vote) {
  return {
    type: 'VOTE',
    item,
    vote
  }
}

export function newTech(item) {
  return {
    type: 'NEW',
    item
  }
}
