import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import TypographyView from '../CommonPane/Typography.js';

//Pane Views
//Typography
//Font
//Color

export default class ParagraphSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'paragraph-typography-view',
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
				ref="paragraphSettingsPane"
				visible={this.props.visible}
				paneHeight="300px"
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}