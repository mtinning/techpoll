/* global describe, it, after, before */
/* eslint no-unused-expressions: 0*/

import React from 'react'
import TestUtils from '../test-utils/tech-poll-test-utils'
import { expect } from 'chai'
import { List, Map } from 'immutable'

import { TechList } from './TechList'

describe('TechList', () => {
  let mockTechCardContainer
  const ham = Map({ name: 'ham' })
  const eggs = Map({ name: 'eggs' })
  const salmon = Map({ name: 'salmon' })
  before(() => {
    const techList = List([ham, eggs, salmon])
    mockTechCardContainer = TestUtils.mock('Connect')
    TestUtils.render(
      <TechList techList={techList} />
    )
  })

  after(() => mockTechCardContainer.unmock())

  it('renders a TechCardContainer for each item in techList', () => {
    expect(mockTechCardContainer[0].props.tech).to.equal(ham)
    expect(mockTechCardContainer[1].props.tech).to.equal(eggs)
    expect(mockTechCardContainer[2].props.tech).to.equal(salmon)
  })
})
