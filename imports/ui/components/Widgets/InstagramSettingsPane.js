import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import LinkAccount from '../CommonPane/AccountLink';
import InstagramSettingsView from '../CommonPane/Instagram.js';
import LayoutView from '../CommonPane/Layout.js';

export default class InstagramSettingsPane extends Component {

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
				id: 'instagram-settings-view',
				title: 'Settings',
				Component: InstagramSettingsView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '2'
				}
			},
			{
				id: 'instagram-layout-view',
				title: 'Type',
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
				ref="instagramSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}