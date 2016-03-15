import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import assert from 'assert'

chai.use(sinonChai)

import loadModules from '../test-utils/systemjs-loader'

function loadTestModules(onSuccess) {
  return loadModules({ 'api/api-action-middleware': [m => m.default] }, onSuccess)
}

describe('API Action Middleware', () => {

  var repo = {
    getTech: sinon.spy(),
    addVote: sinon.spy()
  }

  afterEach(() => {
    repo.addVote.reset()
    repo.getTech.reset()
  })

  describe('VOTE actions', () => {

    var action = {
      type: 'VOTE',
      item: {
        id: 'test_id'
      },
      vote: {
        score: 1,
        message: "test_message"
      }
    }

    it('should call addVote once', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.have.been.calledOnce
    }))

    it('should call addVote with the correct arguments', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.have.been.calledWith(action.item, action.vote)
    }))

    it('should not call getTech', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.getTech).to.not.have.been.called
    }))
  })
  describe('SET_STATE actions', () => {
    var action = {
      type: 'SET_STATE',
      state: {}
    }

    it('should not call addVote', () => loadTestModules((middleware) => {
      middleware(repo)(null)(() => {})(action)

      expect(repo.addVote).to.not.have.been.called
    }))
  })
})
