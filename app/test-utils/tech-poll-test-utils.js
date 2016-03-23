/* eslint react/prefer-stateless-function: 0, react/prop-types: 0 */

import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'

const mocks = {}

const reactCreateElement = React.createElement
React.createElement = (element, props, ...children) => {
  if (typeof(element) !== 'string' && mocks[element.name]) {
    return reactCreateElement.apply(null, [mocks[element.name], props, ...children])
  }
  return reactCreateElement.apply(null, [element, props, ...children])
}

class MockComponent {
  constructor(reactComponentName) {
    this.name = reactComponentName
    mocks[this.name] = this.render.bind(this)
    this.count = 0
  }

  render(props) {
    if (this.count === 0) this.props = props
    else delete this.props
    this[this.count++] = { props }
    return <div></div>
  }

  reset() {
    delete this.props
  }

  unmock() {
    delete mocks[this.name]
  }
}

const store = { getState: () => {} }
export default class TechPollTestUtils {
  static render(reactElement) {
    return ReactTestUtils.renderIntoDocument(
      <Provider store = {store}>{reactElement}</Provider>
    )
  }

  static mock(reactComponentName) {
    return new MockComponent(reactComponentName)
  }
}

Object.assign(TechPollTestUtils, ReactTestUtils)
