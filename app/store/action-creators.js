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

export const viewVotes = (item, techRepository) => (dispatch) => {
  const action = {
    type: 'VIEW_VOTES',
    item,
  }
  dispatch(action)
  techRepository.getVotes(item.get('id'), votes => dispatch({ ...action, votes }))
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
