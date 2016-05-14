var React = require('react')
var ReactDOM = require('react-dom')
import Nav from 'Nav'

var Main = React.createClass({
	render: function()
	{
		return (
			<div>
				<Nav></Nav>
				Main.jsx rendered
				{this.props.children}
			</div>
			);
	}
});

module.exports = Main;