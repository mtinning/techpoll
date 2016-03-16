import {Map} from 'immutable'

export default function(state = Map(), action) {

  function setState(state, newState) {
    return state.merge(newState)
  }

  function vote(item, vote) {
    return item.update('score', v => v + vote.score)
  }

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return state.update(
        'tech',
        v => v.map(t =>
          t.get('name') === action.item.name ? vote(t, action.vote) : t
        )
      )
  }

  return state
}
