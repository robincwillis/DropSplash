import React, { Component, PropTypes } from 'react';

import EmptyContent from '../Common/Button';

export default class MediumWidget extends Component {

	render () {
		return(
			<div className="newsletter-widget">
				<input type="text" placeholder="Enter Email" />
				<Button label="map" />
			</div>
		);
	}
}
