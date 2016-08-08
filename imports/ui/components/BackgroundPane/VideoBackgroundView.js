import React, { Component } from 'react';

import Button from '../Common/Button.js';

import '../../sass/components/common/inputs.scss';

export default class App extends Component {

	render () {

		return (
			<div className="has-button has-tabs" key="view1">
				<div className="content pane-padded">
					<div className="row">
						<p>Paste a YouTube or Vimeo URL.</p>
					</div>
					<div className="row">
						<input className="lg" type="text" placeholder="http://youtube.com/splashvideo" />
					</div>
					<div className="row">
						<p className="xsm grey">By pasting this video I am stating that I have the right to use the video’s content</p>
					</div>
				</div>
				<div className="pane-view-actions">
					<Button
						buttonClass="medium tertiary"
						label="Edit account info"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);

	}

}