import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Map} from 'immutable'
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

const initialState = {
  tech: [
    {'name': 'React', 'category': 'Web Front-End' },
    {'name': 'Angular 1.4', 'category': 'Web Front-End'},
    {'name': 'Angular 2', 'category': 'Web Front-End'},
    {'name': 'Aurelia', 'category': 'Web Front-End'},
    {'name': 'NodeJS', 'category': 'Web Back-End'}
  ]
}

store.dispatch(setState(initialState))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
