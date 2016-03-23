/* global describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0*/

import React from 'react'
import TestUtils from '../test-utils/tech-poll-test-utils.js'
import sinon from 'sinon'
import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { Map } from 'immutable'

chai.use(sinonChai)

import { TechCard } from './TechCard.js'

describe('TechCard', () => {
  const tech = Map({
    name: 'Alan',
    score: 3,
  })
  const submitVote = sinon.spy()
  const techCard = TestUtils.render(<TechCard tech={tech} submitVote={submitVote} />)

  afterEach(() => submitVote.reset())

  it('displays the name of the tech', () => {
    const nameNode = TestUtils.findRenderedDOMComponentWithClass(techCard, 'tech-name')
    expect(nameNode.textContent).to.equal('Alan')
  })

  it('displays the score of the tech', () => {
    const scoreNode = TestUtils.findRenderedDOMComponentWithClass(techCard, 'tech-score')
    expect(scoreNode.textContent).to.equal('3')
  })

  describe('on upvote button click', () => {
    const upVoteNode = TestUtils.findRenderedDOMComponentWithClass(techCard, 'upvote-button')

    beforeEach(() => {
      // The firstChild is due to a but in material-ui
      TestUtils.Simulate.click(upVoteNode.firstChild)
    })

    it('submits an upvote once', () => {
      expect(submitVote).to.have.been.calledOnce
    })

    it('submits an upvote with correct vote', () => {
      const expectedVote = { score: 1, comment: '' }
      expect(submitVote).to.have.been.calledWith(tech, expectedVote)
    })
  })

  describe('on downvote button click', () => {
    const downVoteNode = TestUtils.findRenderedDOMComponentWithClass(techCard, 'downvote-button')

    beforeEach(() => {
      // The firstChild is due to a but in material-ui
      TestUtils.Simulate.click(downVoteNode.firstChild)
    })

    it('submits a downvote once', () => {
      expect(submitVote).to.have.been.calledOnce
    })

    it('submits an upvote with correct vote', () => {
      const expectedVote = { score: -1, comment: '' }
      expect(submitVote).to.have.been.calledWith(tech, expectedVote)
    })
  })

  // TODO: Test PropTypes
})
