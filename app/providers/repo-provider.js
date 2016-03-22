import React from 'react'

export class RepoProvider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.repository = props.repository
  }

  getChildContext() {
    return { repository: this.repository }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

RepoProvider.childContextTypes = {
  repository: React.PropTypes.object.isRequired,
}

RepoProvider.propTypes = {
  repository: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired,
}
