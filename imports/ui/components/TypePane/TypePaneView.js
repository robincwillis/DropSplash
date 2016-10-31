import React, { Component } from 'react';

import Button from 'Components/Common/Button';

import 'sass/components/common/inputs';

export default class TypePaneView extends Component {

	render () {
		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="row">
						<label>font</label>
						<div className="input-group">
							<input className="two-thirds" type="text" placeholder="Work Sans" />
							<input className="one-third" type="text" placeholder="Bold" />
						</div>
					</div>
					<div className="row pane-grid-row">
						<div className="col one-third">
							<label>Size</label>
							<input type="text" />
						</div>
						<div className="col one-third">
							<label>Letter</label>
							<input type="text" />
						</div>
						<div className="col one-third">
							<label>Line</label>
							<input type="text" />
						</div>
					</div>
					<div className="row pane-grid-row range">
						<div className="col one-quarter">
							<label>Opacity</label>
						</div>
						<div className="col three-quarter opacity">
							<input type="range" />
						</div>
					</div>
				</div>
				<div className="pane-view-actions two-actions">
					<Button
						buttonClass="medium tertiary"
						label="Cancel"
						clickEvent={this.props.clickHandler}
					/>
					<Button
						buttonClass="medium"
						label="Done"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);
	}

}
