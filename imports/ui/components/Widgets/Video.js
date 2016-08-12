import React, { Component, PropTypes } from 'react';

export default class VideoWidget extends Component {

	render () {
		return(
			<div className="video-widget">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/Ut8C_IOqEtU" frameborder="0" allowfullscreen></iframe>
			</div>
		);
	}
}
