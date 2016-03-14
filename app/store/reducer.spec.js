import System from 'jspm'
import {expect} from 'chai'
import assert from 'assert'

const systemImport = {
  then: (f) => {
    return Promise.all([System.import('store/reducer'), System.import('immutable')])
      .catch(e => {
        describe('JSPM', () => {
          it ('ES6 module not loaded properly', done => {
            assert.fail(null, '', e)
          })
        })
      })
      .then(modules => {
        f(modules[0].default, modules[1].Map, modules[1].fromJS)
      })
  }
}

describe('reducer', () => {
  it('handles SET_STATE', () => { return systemImport.then((reducer, Map, fromJS) => {
    
    const initialState = Map()
    const stateToTransitionTo = { tech: [
      {
        name: 'tech_1',
        category: 'cat_1',
        score: 0
      },
      {
        name: 'tech_2',
        category: 'cat_2',
        score: 0
      }
    ]}
    const action = {
      type: 'SET_STATE',
      state: stateToTransitionTo
    }

    const nextState = reducer(initialState, action)
    const expectedState = fromJS(stateToTransitionTo)
    expect(nextState).to.deep.equal(expectedState)
  })})
  it('handles VOTE', () => { return systemImport.then((reducer, Map, fromJS) => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          category: 'cat_1',
          score: 0
        },
        {
          name: 'tech_2',
          category: 'cat_2',
          score: 0
        }
      ]
    }

    const initialState = fromJS(initialStateJs)
    initialStateJs.tech[1].score = 1
    const stateToTransitionTo = fromJS(initialStateJs)

    const action = {
      type: 'VOTE',
      vote: {
        item: fromJS(initialStateJs.tech[1]),
        score: 1
      }
    }

    const nextState = reducer(initialState, action)
    expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
  })})
})
