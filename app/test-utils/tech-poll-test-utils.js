/* eslint react/prefer-stateless-function: 0, react/prop-types: 0 */

import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const mocks = {}

const reactCreateElement = React.createElement
React.createElement = (element, props, ...children) => {
  if (typeof(element) !== 'string' && mocks[element.name]) {
    return reactCreateElement.apply(null, [mocks[element.name], props, ...children])
  }
  return reactCreateElement.apply(null, [element, props, ...children])
}

class Wrapper extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
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

export default class TechPollTestUtils {
  static render(reactElement) {
    return ReactTestUtils.renderIntoDocument(
      <Wrapper>{reactElement}</Wrapper>
    )
  }

  static mock(reactComponentName) {
    return new MockComponent(reactComponentName)
  }
}

Object.assign(TechPollTestUtils, ReactTestUtils)
