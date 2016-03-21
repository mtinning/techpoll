/* eslint react/prefer-stateless-function: 0, react/prop-types: 0 */

import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

class Wrapper extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default class TechPollTestUtils {
  static render(reactElement) {
    return ReactTestUtils.renderIntoDocument(
      <Wrapper>{reactElement}</Wrapper>
    )
  }
}

Object.assign(TechPollTestUtils, ReactTestUtils)
