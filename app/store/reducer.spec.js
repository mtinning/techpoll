import System from 'jspm'
import {expect} from 'chai'

const promise = System.import('./reducer')

describe('reducer', () => {
  it('handles SET_STATE', () => {
    promise.then(reducer => {
      const initialState = Map()
      const stateToTransitionTo = [
        {
          name: 'tech_1',
          category: 'cat_1'
        },
        {
          name: 'tech_2',
          category: 'cat_2'
        }
      ]
      const action = {
        type: 'SET_STATE',
        state: fromJS(stateToTransitionTo)
      }

      const nextState = reducer(initialState, action)

      expect(nextState).to.equal(stateToTransitionTo)
    })
  })
})
