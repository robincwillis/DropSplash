import React, { Component } from 'react';

import Button from '../Common/Button.js';

import '../../sass/components/common/inputs.scss';

export default class App extends Component {

	render () {

		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="ds-empty-content light">Upload Image</div>
					<input type="file" className="hidden" />
				</div>
				<div className="pane-view-actions">
					<Button
						buttonClass="medium hollow"
						label="Add Color Overlay"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);

	}

}