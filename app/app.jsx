var React = require('react')
var ReactDOM = require('react-dom')

var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('./components/Main')

// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
			</Route>
		</Router>
	, 
	document.getElementById('main'));