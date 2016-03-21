/* global describe, it, afterEach*/
/* eslint no-unused-expressions: 0*/

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import loadModules from '../test-utils/systemjs-loader'

function loadTestModules(onSuccess) {
  return loadModules({
    'api/api-action-middleware': [m => m.default],
    'immutable': [m => m.fromJS],
  }, onSuccess)
}

describe('API Action Middleware', () => {
  const repo = {
    getTech: sinon.spy(),
    addVote: sinon.spy(),
    addNewTech: sinon.spy(),
  }

  afterEach(() => {
    repo.addVote.reset()
    repo.getTech.reset()
    repo.addNewTech.reset()
  })

  describe('VOTE actions', () => {
    const createAction = (fromJS) => {
      const action = {
        type: 'VOTE',
        item: fromJS({
          id: 'test_id',
        }),
        vote: {
          score: 1,
          message: 'test_message',
        },
      }
      return action
    }

    it('should call addVote once', () => loadTestModules((middleware, fromJS) => {
      middleware(repo)(null)(() => {})(createAction(fromJS))

      expect(repo.addVote).to.have.been.calledOnce
    }))

    it('should call addVote with the correct arguments', () =>
      loadTestModules((middleware, fromJS) => {
        const action = createAction(fromJS)

        middleware(repo)(null)(() => {})(action)

        expect(repo.addVote).to.have.been.calledWith(action.item.get('id'), action.vote)
      })
    )

    it('should not call getTech', () => loadTestModules((middleware, fromJS) => {
      middleware(repo)(null)(() => {})(createAction(fromJS))

      expect(repo.getTech).to.not.have.been.called
    }))
  })
  describe('SET_STATE actions', () => {
    const action = {
      type: 'SET_STATE',
      state: {},
    }

    it('should not call addVote', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.not.have.been.called
    }))

    it('should not call addNewTech', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.not.have.been.called
    }))
  })
  describe('ADD_NEW_TECH actions', () => {
    const action = {
      type: 'ADD_NEW_TECH',
      item: {
        name: 'test_tech',
        id: 'test_tech_id',
        categoryId: 'test_cat_id',
      },
    }

    it('should call addNewTech once', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.have.been.calledOnce
    }))

    it('should call addNewTech with the correct arguments', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.have.been.calledWith(action.item)
    }))
  })
})
