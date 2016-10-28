import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import SettingsIcon from '../../assets/icons/settings-icon.js';
import CheckIcon from '../../assets/icons/check.js';
import DeleteIcon from '../../assets/icons/trash.js';
import EditIcon from '../../assets/icons/edit.js';
import ReorderIcon from '../../assets/icons/reorder.js';
import { WidgetTypes } from '../../../api/widgets/schema.js';

// Setting Panes
import HeadlineSettingsPane from '../Widgets/HeadlineSettingsPane';
import ParagraphSettingsPane from '../Widgets/ParagraphSettingsPane';
import ButtonSettingsPane from '../Widgets/HeadlineSettingsPane';
import ImageSettingsPane from '../Widgets/HeadlineSettingsPane';
import DividerSettingsPane from '../Widgets/HeadlineSettingsPane';

//Components
import Button from './Button.js';


//API
import { removeWidget } from '../../../api/widgets/methods.js';


import '../../sass/components/common/editable.scss';


export default class EditOptions extends Component {

	constructor (props) {
		super(props);
		this.state = {
			settingsPaneVisible : true
		};
	}

	saveWidget () {

	}

	removeWidget (event) {
		//TODO confirm dialog before deleting
		removeWidget.call({widgetId : this.props.widget._id}, (err)=> {
			if (err) {
				console.log(err);
			}
		});
	}

	showSettingsPane () {
		this.setState({
			settingsPaneVisible:true
		});
	}

	hideSettingsPane () {
		this.setState({
			settingsPaneVisible:false,
			something:'else'
		});
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.editing && !nextProps.editing){
			this.hideSettingsPane();
		}
	}

	renderSettingsPane () {
		switch (WidgetTypes[this.props.widget.type]) {
			case 'HEADLINE_WIDGET':
				return(<HeadlineSettingsPane hideSettingsPane={this.hideSettingsPane.bind(this)} visible={this.state.settingsPaneVisible} />);
			case 'PARAGRAPH_WIDGET':
				return(<ParagraphSettingsPane hideSettingsPane={this.hideSettingsPane.bind(this)} visible={this.state.settingsPaneVisible} />);
			case 'IMAGE_WIDGET':
				return(<ImageSettingsPane />);
			case 'BUTTON_WIDGET':
				return(<ButtonSettingsPane />);
			case 'DIVIDER_WIDGET':
				return(<DividerSettingsPane />);
			case 'VIDEO_WIDGET':
				return false;
			case 'AUDIO_WIDGET':
				return false;
			case 'MAP_WIDGET':
				return false;
			case 'MEDIUM_WIDGET':
				return false;
			case 'TWITTER_WIDGET':
				//EX go to a specific view
				//this.refs.addContentPane.goToView();
				return false;
			case 'INSTAGRAM_WIDGET':
				return false;
			case 'MAILCHIMP_WIDGET':
				return false;
			default :
				return false;
		}
	}

	editOptionContent () {

		if(this.props.editing === true) {
			return (<div className="ds-edit-options">
					<div data-tooltip-text="Settings" className="option edit" onClick={this.showSettingsPane.bind(this)}>
						<InlineSVG src={SettingsIcon} element="span" className="icon" />
					</div>
					<div data-tooltip-text="Save" className="option done" onClick={this.props.clickHandler}>
						<InlineSVG src={CheckIcon} element="span" className="icon" />
					</div>
					<div onClick={this.removeWidget.bind(this)} data-tooltip-text="Delete" className="option">
						<InlineSVG src={DeleteIcon} element="span" className="icon" />
					</div>
					{this.renderSettingsPane()}
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
			<div>
				<div className="ds-edit-actions">
					{this.editOptionContent()}
				</div>
				<div className="ds-edit-actions left">
					<Button
						buttonClass="tiny circle ds-reorder-button"
						icon={ReorderIcon}
						tooltipText="Reorder"
						tooltipPosition="left"
					/>
				</div>
			</div>
		);
	}
}