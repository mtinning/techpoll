import {Map, fromJS} from 'immutable'

export default function(state = Map(), action) {

  function setState(state, newState) {
    return state.merge(newState)
  }

  function vote(state, vote) {
    var item = vote.item.toJS()
    return state.set('tech', state.get('tech').update(
      state.get('tech').findIndex(t => t.get('name') === item.name),
      t => t.set('score', t.get('score') + vote.score)))
  }

  function addTech(state, item) {
    return state.set('tech', state.get('tech').push(fromJS(item)))
  }

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return vote(state, action.vote)
    case 'NEW':
        return addTech(state, action.item)
  }

  return state
}
