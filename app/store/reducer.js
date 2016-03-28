import { Map, fromJS } from 'immutable'

function currentVote(state = null, action) {
  switch (action.type) {
    case 'VOTE':
      return null
    case 'OPEN_ADD_VOTE':
      return Map().set('tech', action.item)
    case 'CLOSE_ADD_VOTE':
      return null
    default:
      return state
  }
}


function viewVotes(item, votes) {
  if (votes) {
    return Map().setIn(['tech', 'name'], item.get('name')).set('votes', votes)
  }
  return null
}

function activeVotes(state = null, action) {
  switch (action.type) {
    case 'VOTE': {
      if (state && state.getIn(['tech', 'name']) === action.item.get('name')) {
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
  const index = state.findIndex(t => t.get('name') === item.name)

  if (index >= 0) {
    return state
  }
  return state.push(fromJS(item))
}

function tech(state = null, action) {
  switch (action.type) {
    case 'ADD_NEW_TECH':
      return addTech(state, action.item)
    case 'VOTE': {
      const techIndex = state.findIndex(t => t === action.item)
      const nextTech = state.get(techIndex).update('score', v => v + action.vote.score)
      const nextState = state.set(techIndex, nextTech)
      return nextState
    }
    default:
      return state
  }
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state)
    default:
      return Map({
        currentVote: currentVote(state.get('currentVote'), action),
        activeVotes: activeVotes(state.get('activeVotes'), action),
        tech: tech(state.get('tech'), action),
      })
  }
}
