/* global describe, it, after */
/* eslint no-unused-expressions: 0*/

import React from 'react'
import TestUtils from '../test-utils/tech-poll-test-utils'
import { expect } from 'chai'
import { List } from 'immutable'

import { TechCategory } from './TechCategory'

describe('TechCategory', () => {
  const techList = List(['ham', 'eggs', 'salmon'])
  const mockTechListComponent = TestUtils.mock('TechList')
  const techCategory = TestUtils.render(
    <TechCategory categoryName="kerplunk" techList={techList} />
  )

  after(() => mockTechListComponent.unmock())

  it('displays the correct category name', () => {
    const nameNode = TestUtils.findRenderedDOMComponentWithTag(techCategory, 'h4')
    expect(nameNode.textContent).to.equal('kerplunk')
  })

  it('renders a TechList component with the correct techList', () => {
    expect(mockTechListComponent.props.techList).to.equal(techList)
  })
})
