export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(item, score) {
  return {
    type: 'VOTE',
    vote: {
      item,
      score
    }
  }
}

export function newTech(item) {
  return {
    type: 'NEW',
    item
  }
}
