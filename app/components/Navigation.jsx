var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, Link } from 'react-router'

var Navigation = React.createClass({

	render: function()
	{
		return (
				<div role="navigation" className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <Link className="navbar-brand" to="#">Brand</Link>
					      <Link className="navbar-brand" to="#">Brand1</Link>
					      <Link className="navbar-brand" to="#">Brand2</Link>
					    </div>
					  </div>
				</div>
			);

	}


});

module.exports = Navigation;