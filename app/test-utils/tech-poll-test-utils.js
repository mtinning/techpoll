/* eslint react/prefer-stateless-function: 0, react/prop-types: 0 */

import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'
import { RepoProvider } from '../providers/repo-provider'

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
    this.index = 0
  }

  render(props) {
    if (this.index === 0) this.props = props
    else delete this.props
    this[this.index++] = { props }
    return <div></div>
  }

  reset() {
    delete this.props
    for (let i = 0; i <= this.index; i++) {
      delete this[i]
    }
    this.index = 0
  }

  unmock() {
    delete mocks[this.name]
  }
}

const store = {
  getState: () => {},
  subscribe: () => {},
  dispatch: () => {},
}

const techRepository = {}

export default class TechPollTestUtils {
  static render(reactElement) {
    return ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <RepoProvider repository={techRepository}>
          {reactElement}
        </RepoProvider>
      </Provider>
    )
  }

  static mock(reactComponentName) {
    return new MockComponent(reactComponentName)
  }
}

Object.assign(TechPollTestUtils, ReactTestUtils)
