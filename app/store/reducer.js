import { Map } from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function submitVote(item, vote) {
  return item.update('score', v => v + vote.score)
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
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
