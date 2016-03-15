import { Map } from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function submitVote(state, item, vote) {
  return state.set('tech', state.get('tech').update(
    state.get('tech').findIndex(t => t.get('name') === item.name),
    t => t.set('score', t.get('score') + vote.score)))
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return submitVote(state, action.item, action.vote)
    default:
      return state
  }
}
