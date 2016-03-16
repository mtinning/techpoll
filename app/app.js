import 'systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Map} from 'immutable'

import {App} from './components/App'
import {TechPollContainer} from './components/TechPoll'
import reducer from './store/reducer'
import {setState} from './store/action-creators'
import apiActionMiddleware from './api/api-action-middleware'
import techRepository from './api/tech-repository'

const routes = (
<Route component={App}>
  <Route path="/" component={TechPollContainer}/>
</Route>
)

const createStoreWithMiddleware = applyMiddleware(
  apiActionMiddleware(techRepository)
)(createStore)

const store = createStoreWithMiddleware(reducer)

const rootNode = document.getElementById('app')

techRepository.getTech(tech => {
  store.dispatch(setState({tech: tech}))
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
