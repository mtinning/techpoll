import {Map, fromJS} from 'immutable'

export default function(state = Map(), action) {

  function setState(state, newState) {
    return state.merge(newState)
  }

  function vote(state, item, vote) {
    return state.set('tech', state.get('tech').update(
      state.get('tech').findIndex(t => t.get('name') === item.name),
      t => t.set('score', t.get('score') + vote.score)))
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

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return vote(state, action.item, action.vote)
    case 'ADD':
      return addTech(state, action.item)
  }

  return state
}
