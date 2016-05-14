var React = require('react')
var ReactDOM = require('react-dom')
import Nav from 'Nav'

var Main = React.createClass({
	render: function()
	{
		return (
			<div>
				<Nav></Nav>
				<div className="row">
					<div className="col-md-6 center-block">
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Main;