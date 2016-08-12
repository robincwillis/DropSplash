import React, { Component, PropTypes } from 'react';

import EmptyContent from '../Common/EmptyContent';

export default class Audio extends Component {

	render () {
		console.log('audio');
		return(
			<div className="audio-widget">
				<h1>Audio</h1>
				<button>Audio</button>
			</div>
		);
	}
}
