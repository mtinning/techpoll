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

export function openAddVote(item) {
  return {
    type: 'OPEN_ADD_VOTE',
    item,
  }
}

export function closeAddVote(item) {
  return {
    type: 'CLOSE_ADD_VOTE',
    item,
  }
}
