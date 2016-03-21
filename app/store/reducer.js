import { Map, fromJS } from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function submitVote(item, vote) {
  return item.update('score', v => v + vote.score)
}

function addTech(state, item) {
  // check if item being added already exists
  const index = state.get('tech').findIndex(t => t.get('name') === item.name)

  if (index >= 0) {
    return state
  }

  return state.set('tech', state.get('tech').push(fromJS(item)))
}

function viewVotes(state, item, votes) {
  if (votes) {
    return state.delete('loadingVotes').set('activeVotes', Map().set('tech', item).set('votes', fromJS(votes)))
  }

  return state.delete('activeVotes').set('loadingVotes', true)
}

function openAddVote(state, tech) {
  return state.set('currentVote', Map().set('tech', tech))
}

function closeAddVote(state) {
  return state.delete('currentVote')
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'ADD_NEW_TECH':
      return addTech(state, action.item)
    case 'OPEN_ADD_VOTE':
      return openAddVote(state, action.item)
    case 'CLOSE_ADD_VOTE':
      return closeAddVote(state)
    case 'VOTE':
      let nextState = state.delete('currentVote').update(
        'tech',
        v => v.map(t =>
          t === action.item ? submitVote(t, action.vote) : t
        )
      )
      if (nextState.has('activeVotes') && nextState.getIn(['activeVotes','tech']) === action.item) {
        nextState = nextState.updateIn(['activeVotes','votes'], v => v.push(fromJS(action.vote)))
      }
      return nextState
    case 'VIEW_VOTES':
      return viewVotes(state, action.item, action.votes)
    case 'CLOSE_VOTES':
      return state.delete('activeVotes')
    default:
      return state
  }
}
