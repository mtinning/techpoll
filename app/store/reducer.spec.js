/* global describe, it*/

import { expect } from 'chai'
import { Map, fromJS } from 'immutable'

import reducer from './reducer'

describe('reducer', () => {
  describe('when SET_STATE action is dispatched', () => {
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

    it('sets the state', () => {
      const nextState = reducer(initialState, action)
      const expectedState = fromJS(stateToTransitionTo)
      expect(nextState).to.deep.equal(expectedState)
    })
  })

  describe('when VOTE action is dispatched', () => {
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

    it('increments the correct items vote count', () => {
      const nextState = reducer(initialState, action)
      expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
    })
  })

  describe('when VOTE action is dispatched and add comment is open', () => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          category: 'cat_1',
          score: 0,
        },
      ],
    }

    const initialState = fromJS(initialStateJs)

    const tech = initialState.getIn(['tech', '0'])
    const stateWithAddVoteOpen = initialState.set('currentVote', Map().set('tech', tech))
    const stateToTransitionTo = stateWithAddVoteOpen
      .delete('currentVote')
      .setIn(['tech', '0', 'score'], 1)

    const action = {
      type: 'VOTE',
      item: tech,
      vote: {
        score: 1,
        comment: '',
      },
    }

    it('removes currentVote', () => {
      const nextState = reducer(stateWithAddVoteOpen, action)
      expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
    })
  })

  describe('when ADD_NEW_TECH action is dispatched', () => {
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

    it('adds a new tech item', () => {
      const action = {
        type: 'ADD_NEW_TECH',
        item: newTechItemJs,
      }

      const nextState = reducer(initialState, action)
      expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
    })

    it('does not add a new item if the item is a duplicate', () => {
      const action = {
        type: 'ADD_NEW_TECH',
        item: initialStateJs.tech[0],
      }

      const nextState = reducer(initialState, action)
      expect(nextState.toJS()).to.deep.equal(initialState.toJS())
    })
  })

  describe('when OPEN_ADD_VOTE action is dispatched', () => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          categoryId: 'cat_1',
          score: 0,
        },
      ],
    }

    const initialState = fromJS(initialStateJs)

    const tech = initialState.getIn(['tech', '0'])

    const stateToTransitionTo = initialState.set('currentVote', Map().set('tech', tech))

    const action = {
      type: 'OPEN_ADD_VOTE',
      item: tech,
    }

    it('sets the currentVote', () => {
      const nextState = reducer(initialState, action)
      expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
    })
  })

  describe('when CLOSE_ADD_VOTE action is dispatched', () => {
    const initialStateJs = {
      tech: [
        {
          name: 'tech_1',
          categoryId: 'cat_1',
          score: 0,
        },
      ],
    }

    const initialState = fromJS(initialStateJs)

    const tech = initialState.getIn(['tech', '0'])

    const addVoteOpenState = initialState.set('currentVote', Map().set('tech', tech))

    const stateToTransitionTo = addVoteOpenState.delete('currentVote')

    const action = {
      type: 'CLOSE_ADD_VOTE',
    }

    it('removes the currentVote', () => {
      const nextState = reducer(addVoteOpenState, action)
      expect(nextState.toJS()).to.deep.equal(stateToTransitionTo.toJS())
    })
  })
})
