/* global describe, it, afterEach*/
/* eslint no-unused-expressions: 0*/

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { fromJS } from 'immutable'

chai.use(sinonChai)

import middleware from './api-action-middleware'

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
    const createAction = () => {
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

    it('should call addVote once', () => {
      middleware(repo)(null)(() => {})(createAction())

      expect(repo.addVote).to.have.been.calledOnce
    })

    it('should call addVote with the correct arguments', () => {
      const action = createAction()

      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.have.been.calledWith(action.item.get('id'), action.vote)
    })

    it('should not call getTech', () => {
      middleware(repo)(null)(() => {})(createAction())

      expect(repo.getTech).to.not.have.been.called
    })
  })

  describe('SET_STATE actions', () => {
    const action = {
      type: 'SET_STATE',
      state: {},
    }

    it('should not call addVote', () => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.not.have.been.called
    })

    it('should not call addNewTech', () => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.not.have.been.called
    })
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

    it('should call addNewTech once', () => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.have.been.calledOnce
    })

    it('should call addNewTech with the correct arguments', () => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addNewTech).to.have.been.calledWith(action.item)
    })
  })
})
