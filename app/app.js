import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {App} from './components/App'
import {TechPoll} from './components/TechPoll'

const routes = (
<Route component={App}>
  <Route path="/" component={TechPoll}/>
</Route>
)

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
