import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import LinkAccount from '../CommonPane/AccountLink.js';
import TwitterSettings from '../CommonPane/Twitter.js';
import LayoutView from '../CommonPane/Layout.js';

export default class TwitterSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'link-account-view',
				title: 'Link Account',
				Component: LinkAccount,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '1'
				}
			},
			{
				id: 'twitter-settings-view',
				title: 'Settings',
				Component: TwitterSettings,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '2'
				}
			},
			{
				id: 'twitter-layout-view',
				title: 'Layout',
				Component: LayoutView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '3'
				}
			}
		];
	}


	render() {
		return (
			<Pane
				title="Settings"
				closeable={true}
				paneTabs={true}
				views={this.paneContent()}
				ref="twitterSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}