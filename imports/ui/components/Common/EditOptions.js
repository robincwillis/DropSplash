import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import SettingsIcon from '../../assets/icons/settings-icon.js';
import CheckIcon from '../../assets/icons/check.js';
import DeleteIcon from '../../assets/icons/trash.js';
import EditIcon from '../../assets/icons/edit.js';

//Components
import Button from './Button.js';


//API
import { removeWidget } from '../../../api/widgets/methods.js';


import '../../sass/components/common/editable.scss';


export default class EditOptions extends Component {

	saveWidget () {

	}

	removeWidget (event) {
		console.log('trying to remove');
		console.log(this.props);
		//TODO confirm dialog before deleting
		removeWidget.call({widgetId : this.props.widget._id}, (err)=> {
			if (err) {
				console.log(err);
			}
		});
	}

	openSettingsPane () {

	}

	editOptionContent () {
		if(this.props.editing === true) {
			return (<div className="ds-edit-options">
					<div data-tooltip-text="Settings" className="option edit">
						<InlineSVG src={SettingsIcon} element="span" className="icon" />
					</div>
					<div data-tooltip-text="Save" className="option done" onClick={this.props.clickHandler}>
						<InlineSVG src={CheckIcon} element="span" className="icon" />
					</div>
					<div onClick={this.removeWidget.bind(this)} data-tooltip-text="Delete" className="option">
						<InlineSVG src={DeleteIcon} element="span" className="icon" />
					</div>
				</div>);
		} else {
			return (
				<Button
					buttonClass="tiny circle ds-edit-button"
					icon={EditIcon}
					tooltipText="Edit"
					clickEvent={this.props.clickHandler}
				/>
			);
		}
	}

	render () {

		return (
			<div className="ds-edit-actions">
				{this.editOptionContent()}
			</div>
		);

	}
}