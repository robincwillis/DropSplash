import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import TypographyView from '../CommonPane/Typography.js';

export default class DividerSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'divider-typography-pane',
				title: 'Type',
				Component: TypographyView
			}
		];
	}


	render() {
		return (
			<Pane
				title="Settings"
				closeable={true}
				views={this.paneContent()}
				ref="dividerSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}