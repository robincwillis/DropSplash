import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from '../Common/Button.js';


import '../../sass/components/common/inputs';

export default class SectionLayoutView extends Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="ds-empty-content light">Upload Image</div>
					<input type="file" className="hidden" />
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