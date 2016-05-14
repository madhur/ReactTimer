var React = require('react');

var Clock = React.createClass({

	formatSeconds: function(totalSeconds)
	{
		var minute = Math.floor(totalSeconds / 60);
		var seconds = totalSeconds % 60;

		if(seconds < 10)
		{
			seconds = '0' + seconds;
		}

		if(minute < 10)
		{
			minute = '0' + minute;
		}

		return minute + ':' + seconds;
	},

	render: function()
	{
		return(
			<div>

			</div>
			);

	}

});

module.exports = Clock;
