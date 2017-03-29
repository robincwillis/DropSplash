import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

import UrlView from '../CommonPane/Url';
import AudioView from '../CommonPane/Audio';
import LayoutView from '../CommonPane/Layout.js';

export default class AudioSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'audio-url-view',
				title: 'Source',
				Component: UrlView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '1'
				}
			},
			{
				id: 'audio-settigns-view',
				title: 'Settings',
				Component: AudioView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '2'
				}
			},
			{
				id: 'audio-layout-view',
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
				ref="audioSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}