var React = require('react')
var ReactDOM = require('react-dom')
import Nav from 'Nav'

var Main = React.createClass({
	render: function()
	{
		return (
			<div>
				<Nav></Nav>
			</div>
			);
	}
});

module.exports = Main;