import React, { Component } from 'react';

//Icons
import CheckIcon from '../../assets/icons/check.js';

//Components
import Button from '../Common/Button.js';

import '../../sass/components/common/inputs.scss';



export default class InstagramSettingsView extends Component {

	//Button on click, either create or update instagram widget
	constructor (props) {
		super(props);
		console.log('insta settings constrc');
	}

	render () {
		console.log('insta settings rendered');
		return (
			<div className="has-button">
				<div className="content">
					<p>testing</p>
				</div>
				<div className="pane-view-actions">
					<Button
						buttonClass="medium tertiary"
						icon={CheckIcon}
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);

	}
}

