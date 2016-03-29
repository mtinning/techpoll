import { combineReducers } from 'redux-immutable'
import { Map, fromJS, List } from 'immutable'

function currentVote(state = null, action) {
  switch (action.type) {
    case 'OPEN_ADD_VOTE':
      return Map().set('tech', action.item)
    case 'CLOSE_ADD_VOTE':
    case 'VOTE':
      return null
    default:
      return state
  }
}

function viewVotes(item, votes) {
  return Map().set('techId', item.get('id')).set('votes', votes)
}

function activeVotes(state = null, action) {
  switch (action.type) {
    case 'VOTE': {
      if (state && state.get('techId') === action.item.get('id')) {
        return viewVotes(action.item, state.get('votes').push(fromJS(action.vote)))
      }
      return state
    }
    case 'VIEW_VOTES':
      return viewVotes(action.item, fromJS(action.votes))
    case 'CLOSE_VOTES':
      return null
    default:
      return state
  }
}

function addTech(state, item) {
  // check if item being added already exists
  const index = state.findIndex(t => t.get('id') === item.id)

  if (index >= 0) {
    return state
  }
  return state.push(fromJS(item))
}

function tech(state = List(), action) {
  switch (action.type) {
    case 'ADD_NEW_TECH':
      return addTech(state, action.item)
    case 'VOTE': {
      const techIndex = state.findIndex(t => t === action.item)
      const nextTech = state.get(techIndex).update('score', v => v + action.vote.score)
      const nextState = state.set(techIndex, nextTech)
      return nextState
    }
    case 'SET_TECH':
      return fromJS(action.tech)
    default:
      return state
  }
}

export default combineReducers({
  currentVote,
  activeVotes,
  tech,
})
