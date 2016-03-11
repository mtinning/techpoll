import {Map} from 'immutable'

export default function(state = Map(), action) {

  function setState(state, newState) {
    return state.merge(newState)
  }

  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
  }

  return state
}
