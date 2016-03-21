import 'systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { App } from './components/App'
import { TechPollContainer } from './components/TechPoll'
import reducer from './store/reducer'
import { setState } from './store/action-creators'
import apiActionMiddleware from './api/api-action-middleware'
import techRepository from './api/tech-repository'

const routes = (
<Route component={App}>
  <Route path="/" component={TechPollContainer} />
</Route>
)

const finalCreateStore = compose(
  applyMiddleware(apiActionMiddleware(techRepository)),
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = finalCreateStore(reducer)

const rootNode = document.getElementById('app')

class RepoProvider extends React.Component {
  getChildContext() {
    return { store: this.store, repository: this.repository }
  }

  constructor(props, context) {
    super(props, context)
    this.repository = props.repository
    this.store = props.store
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

RepoProvider.childContextTypes = {
  repository: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
}

techRepository.getTech(tech => {
  store.dispatch(setState({ tech }))
  ReactDOM.render(
    <RepoProvider repository={techRepository} store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </RepoProvider>,
    rootNode
  )
})

export function __unload() {
  ReactDOM.unmountComponentAtNode(rootNode)
}
