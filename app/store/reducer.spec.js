/* global describe, it*/

import { expect } from 'chai'

import loadModules from '../test-utils/systemjs-loader'

function loadTestModules(onSuccess) {
  return loadModules({
    'store/reducer': [m => m.default],
    'immutable': [m => m.Map, m => m.fromJS],
  }, onSuccess)
}

describe('reducer', () => {
  it('handles SET_STATE', () => loadTestModules((reducer, Map, fromJS) => {
    const initialState = Map()
    const stateToTransitionTo = { tech: [
      {
        name: 'tech_1',
        category: 'cat_1',
        score: 0,
      },
      {
        name: 'tech_2',
        category: 'cat_2',
        score: 0,
      },
    ] }

    const action = {
      type: 'SET_STATE',
      state: stateToTransitionTo,
    }

    const nextState = reducer(initialState, action)
    const expectedState = fromJS(stateToTransitionTo)
    expect(nextState).to.deep.equal(expectedState)
  }))
  it('handles VOTE', () => loadTestModules((reducer, Map, fromJS) => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          category: 'cat_1',
          score: 0,
        },
        {
          name: 'tech_2',
          category: 'cat_2',
          score: 0,
        },
      ],
    }

    const initialState = fromJS(initialStateJs)
    initialStateJs.tech[1].score = 1
    const stateToTransitionTo = fromJS(initialStateJs)

    const action = {
      type: 'VOTE',
      item: initialState.getIn(['tech', '1']),
      vote: {
        score: 1,
        comment: '',
      },
    }

    const nextState = reducer(initialState, action)
    expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
  }))

  it('handles ADD_NEW_TECH', () => loadTestModules((reducer, Map, fromJS) => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          category: 'cat_1',
          score: 0,
        },
      ],
    }

    const newTechItemJs = {
      name: 'tech_2',
      category: 'cat_2',
      score: 0,
    }

    const initialState = fromJS(initialStateJs)
    // append new tech to initial array
    const initialStateAndNewTech = {
      tech: initialStateJs.tech.concat(newTechItemJs),
    }
    const stateToTransitionTo = fromJS(initialStateAndNewTech)

    const action = {
      type: 'ADD_NEW_TECH',
      item: newTechItemJs,
    }

    const nextState = reducer(initialState, action)
    expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
  }))

  it('handles duplicate ADD_NEW_TECH', () => loadTestModules((reducer, Map, fromJS) => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          category: 'cat_1',
          score: 0,
        },
      ],
    }

    // new technology with same name - attempt to add should have no effect
    const newTechItemJs = {
      name: 'tech_1',
      category: 'cat_2',
      score: 99,
    }

    const initialState = fromJS(initialStateJs)
    const stateToTransitionTo = fromJS(initialStateJs)

    const action = {
      type: 'ADD_NEW_TECH',
      item: newTechItemJs,
    }

    const nextState = reducer(initialState, action)
    expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
  }))
})
