import 'systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Map} from 'immutable'
import $ from 'jquery'

import {App} from './components/App'
import {TechPollContainer} from './components/TechPoll'
import reducer from './store/reducer'
import {setState} from './store/action-creators'

const routes = (
<Route component={App}>
  <Route path="/" component={TechPollContainer}/>
</Route>
)

const store = createStore(reducer)

const rootNode = document.getElementById('app')

$.get('/api/tech', tech => {
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
