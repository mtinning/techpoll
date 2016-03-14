import {Map} from 'immutable'

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

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return vote(state, action.vote)
  }

  return state
}
