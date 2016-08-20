import React, { Component } from 'react';

//Icons
import CheckIcon from '../../assets/icons/check.js';

//Components
import Button from '../Common/Button.js';
//ColorPicker is missing
// import ColorPicker from 'react-colorpickr';

// import '../../sass/components/common/color-picker.scss';
import '../../sass/components/common/inputs.scss';

export default class App extends Component {

	render () {

		return (
			<div className="has-button has-tabs" key="view1">
				<div className="content">
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