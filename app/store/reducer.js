import {Map} from 'immutable'

export default function(state = Map(), action) {

  function setState(state, newState) {
    return state.merge(newState)
  }

  function vote(state, item, vote) {
    if (state.get('name') !== item.name) return state
    return state.update('score', v => v + vote.score)
  }

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return state.update(
        'tech',
        v => v.map(t => vote(t, action.item, action.vote))
      )
  }

  return state
}
