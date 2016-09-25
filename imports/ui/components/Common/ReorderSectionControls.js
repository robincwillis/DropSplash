import React, { Component } from 'react';

// Icons
import InlineSVG from 'svg-inline-react';
import TrashIcon from '../../assets/icons/trash.js';
import DragIcon from '../../assets/icons/drag-lg.js';

// Components
import Button from './Button.js';

export default class App extends Component {

	render () {

		return (
			<div>
				<div className="reorder-handle">
					<InlineSVG src={DragIcon} element="span" className="icon" />
				</div>
				<div className="reorder-delete">
					<Button
						buttonClass="delete-section circle secondary medium"
						icon={TrashIcon}
						tooltipText="Delete Section"
						tooltipPosition="left"
						{...this.props}
					/>
				</div>
			</div>
		);

	}
}