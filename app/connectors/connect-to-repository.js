import React from 'react'

export const connectToRepository = (WrappedComponent) => {
  const ConnectedToRepository =
    (props, context) =>
      React.createElement(WrappedComponent, { ...props, repository: context.repository })

  ConnectedToRepository.contextTypes = {
    repository: React.PropTypes.object.isRequired,
  }

  return ConnectedToRepository
}
