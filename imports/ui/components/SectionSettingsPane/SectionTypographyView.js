import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from '../Common/Button.js';


import '../../sass/components/common/inputs';

export default class SectionTypographyView extends Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="row">
						<label>font</label>
						<div className="input-group">
							<input className="two-thirds" type="text" />
							<input className="one-third" type="text" />
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
						<div className="col three-quarter">
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