import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import InstagramSettingsView from './InstagramSettingsView.js';

export default class InstagramSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'instagram-settings-view',
				title: 'Type',
				Component: InstagramSettingsView
			}
		];
	}


	render() {
		return (
			<Pane
				title="Settings"
				closeable={true}
				views={this.paneContent()}
				ref="instagramSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}