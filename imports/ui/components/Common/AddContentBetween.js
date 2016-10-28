import React, { Component } from 'react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from './Button.js';

import '../../sass/components/common/add-content-between.scss';

export default class App extends Component {

	render () {

		return (
			<div className="add-content-between">
				<div className="line">
					<Button
						buttonClass="tiny circle"
						tooltipText="Add Content"
						// tooltipPosition="top"
						icon={PlusIcon}
						{...this.props}
					/>
				</div>
			</div>
		);

	}
}