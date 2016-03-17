import {Map, fromJS} from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function submitVote(item, vote) {
  return item.update('score', v => v + vote.score)
}

function addTech(state, item) {
  // check if item being added already exists
  var index = state.get('tech').findIndex(t => t.get('name') === item.name)

  if (index >= 0) {
    console.log('Tech: \''+ item.name + '\' already exists')
    return state
  }
  else {
    return state.set('tech', state.get('tech').push(fromJS(item)))
  }
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'ADD':
      return addTech(state, action.item)
    case 'VOTE':
      return state.update(
        'tech',
        v => v.map(t =>
          t.get('name') === action.item.name ? submitVote(t, action.vote) : t
        )
      )
    default:
      return state
  }
}
