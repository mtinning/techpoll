/* global describe, it, after, before */
/* eslint no-unused-expressions: 0*/

import React from 'react'
import TestUtils from '../test-utils/tech-poll-test-utils'
import chai, { expect } from 'chai'
import chaiImmutable from 'chai-immutable'
import { List, Map } from 'immutable'

chai.use(chaiImmutable)

import { TechCategoryList } from './TechCategoryList'

describe('TechCategoryList', () => {
  describe('renders a TechCategory for each category in techList', () => {
    const js = Map({ categoryId: 'Web', name: 'Javascript' })
    const java = Map({ categoryId: 'Backend', name: 'Java' })
    const scrum = Map({ categoryId: 'Process', name: 'SCRUM' })
    const tdd = Map({ categoryId: 'Process', name: 'TDD' })
    const scala = Map({ categoryId: 'Backend', name: 'Scala' })
    const techList = List([js, java, scrum, tdd, scala])
    let mockTechCategory
    before(() => {
      mockTechCategory = TestUtils.mock('TechCategory')
      TestUtils.render(<TechCategoryList techList={techList} />)
    })

    after(() => mockTechCategory.unmock())

    it('with the correct categoryName', () => {
      expect(mockTechCategory[0].props.categoryName).to.equal('Web')
      expect(mockTechCategory[1].props.categoryName).to.equal('Backend')
      expect(mockTechCategory[2].props.categoryName).to.equal('Process')
    })

    it('with the correct techList', () => {
      expect(mockTechCategory[0].props.techList).to.equal(List([js]))
      expect(mockTechCategory[1].props.techList).to.equal(List([java, scala]))
      expect(mockTechCategory[2].props.techList).to.equal(List([scrum, tdd]))
    })
  })
})
