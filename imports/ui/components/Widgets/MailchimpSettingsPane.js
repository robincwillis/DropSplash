import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import TypographyView from '../CommonPane/Typography.js';

export default class MailchimpSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'mailchimp-typography-pane',
				title: 'Type',
				Component: TypographyView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget
				}
			}
		];
	}


	render() {
		return (
			<Pane
				title="Settings"
				closeable={true}
				views={this.paneContent()}
				ref="mailchimpSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}