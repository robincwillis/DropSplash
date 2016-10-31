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
import ButtonSettingsPane from '../Widgets/ButtonSettingsPane';
import ImageSettingsPane from '../Widgets/ImageSettingsPane';
import DividerSettingsPane from '../Widgets/DividerSettingsPane';
import AudioSettingsPane from '../Widgets/AudioSettingsPane';
import InstagramSettingsPane from '../Widgets/InstagramSettingsPane';
import MailchimpSettingsPane from '../Widgets/MailchimpSettingsPane';
import MapSettingsPane from '../Widgets/MapSettingsPane';
import MediumSettingsPane from '../Widgets/MediumSettingsPane';
import VideoSettingsPane from '../Widgets/VideoSettingsPane';
import TwitterSettingsPane from '../Widgets/TwitterSettingsPane';

//Components
import Button from './Button.js';


//API
import { removeWidget } from '../../../api/widgets/methods.js';


import '../../sass/components/common/editable.scss';


export default class EditOptions extends Component {

	constructor (props) {
		super(props);
		this.state = {
			settingsPaneVisible : false
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
			settingsPaneVisible:false
		});
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.editing && !nextProps.editing){
			this.hideSettingsPane();
		}
	}

	renderSettingsPane () {
		const props = {
			hideSettingsPane: this.hideSettingsPane.bind(this),
			visible: this.state.settingsPaneVisible,
			widget : this.props.widget
		};

		switch (WidgetTypes[this.props.widget.type]) {
			case 'HEADLINE_WIDGET':
				return(<div className="pane-position static v-center"><HeadlineSettingsPane {...props}  /></div>);
			case 'PARAGRAPH_WIDGET':
				return(<div className="pane-position static v-center"><ParagraphSettingsPane {...props} /></div>);
			case 'IMAGE_WIDGET':
				return(<div className="pane-position static v-center"><ImageSettingsPane {...props} /></div>);
			case 'BUTTON_WIDGET':
				return(<div className="pane-position static v-center"><ButtonSettingsPane {...props} /></div>);
			case 'DIVIDER_WIDGET':
				return(<div className="pane-position static v-center"><DividerSettingsPane {...props} /></div>);
			case 'VIDEO_WIDGET':
				return(<div className="pane-position static v-center"><VideoSettingsPane {...props} /></div>);
			case 'AUDIO_WIDGET':
				return(<div className="pane-position static v-center"><AudioSettingsPane {...props} /></div>);
			case 'MAP_WIDGET':
				return(<div className="pane-position static v-center"><MapSettingsPane {...props} /></div>);
			case 'MEDIUM_WIDGET':
				return(<div className="pane-position static v-center"><MediumSettingsPane {...props} /></div>);
			case 'TWITTER_WIDGET':
				return(<div className="pane-position static v-center"><TwitterSettingsPane {...props} /></div>);
				//EX go to a specific view
				//this.refs.addContentPane.goToView();

			case 'INSTAGRAM_WIDGET':
				return(<InstagramSettingsPane {...props} />);
			case 'MAILCHIMP_WIDGET':
				return(<MailchimpSettingsPane {...props} />);
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