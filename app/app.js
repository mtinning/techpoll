import 'systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

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
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = finalCreateStore(reducer)

const rootNode = document.getElementById('app')

techRepository.getTech(tech => {
  store.dispatch(setState({ tech }))
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    rootNode
  )
})

export function __unload() {
  ReactDOM.unmountComponentAtNode(rootNode)
}
