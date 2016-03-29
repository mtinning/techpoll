import 'systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { RepoProvider } from './providers/repo-provider'
import { App } from './components/App'
import { TechPollContainer } from './components/TechPoll'
import reducer from './store/reducer'
import { setTech } from './store/action-creators'
import apiActionMiddleware from './api/api-action-middleware'
import techRepository from './api/tech-repository'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

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

techRepository.getTech().subscribe(tech => {
  store.dispatch(setTech(tech))
  ReactDOM.render(
    <Provider store={store}>
      <RepoProvider repository={techRepository}>
        <Router history={hashHistory}>{routes}</Router>
      </RepoProvider>
    </Provider>,
    rootNode
  )
})

export function __unload() {
  ReactDOM.unmountComponentAtNode(rootNode)
}
