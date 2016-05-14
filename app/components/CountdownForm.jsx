var React = require('react');

var CountdownForm = React.createClass({

	onSubmit: function(e)
	{
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		if(strSeconds.match(/^[0-9]*$/))
		{
			console.log('matched');
			this.refs.seconds.value='';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},

	render: function()
	{
		return (
				<div>
					<form ref="form" onSubmit = {this.onSubmit} className="countdown-form">
						<input type="text" className="form-control" ref="seconds" placeholder="Enter time in seconds" />
						<button className="btn btn-default form-control btn-block">Start</button>
					</form>
				</div>
			);
	}

});

module.exports = CountdownForm;