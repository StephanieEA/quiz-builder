import React from 'react'
import { render } from 'react-dom'
import {Router, IndexRoute, Route, browserHistory} from 'react-router'

import App from './components/App/App.js'
import Home from './components/Home/Home.js'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    </Route>
  </Router>
, document.querySelector('.application'));
