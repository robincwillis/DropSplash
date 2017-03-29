import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

import UrlView from '../CommonPane/Url.js';
import VideoView from '../CommonPane/Video.js';
import LayoutView from '../CommonPane/Layout.js';


export default class VideoSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'video-url-view',
				title: 'Url',
				Component: UrlView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					title:"view 1",
					key : '1'
				}
			},
			{
				id: 'video-settings-view',
				title: 'Settings',
				Component: VideoView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					title:"view 1",
					key : '2'
				}
			},
			{
				id: 'video-layout-view',
				title: 'Layout',
				Component: LayoutView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					title:"view 1",
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
				ref="videoSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}