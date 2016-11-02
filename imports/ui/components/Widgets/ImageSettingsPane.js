import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import Image from '../CommonPane/Image.js';
import Layout from '../CommonPane/Layout.js';

export default class ImageSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'image-upload-pane',
				title: 'Image',
				Component: Image,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '1'
				}
			},
			{
				id: 'image-layout-pane',
				title: 'Layout',
				Component: Layout,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '2'
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
				ref="imageSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}