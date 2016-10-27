import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import TypographyView from '../CommonPane/Typography.js';

//Pane Views
//Typography
//Font
//Color

export default class HeadlineSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	hidePane () {

	}

	paneContent () {

		return [
			{
				id: 'headline-typography-pane',
				title: 'Type',
				Component: TypographyView,
				props : {
					hidePane: this.props.hideSettingsPane
				}
			}
		];
	}

	render () {
		console.log('rendering headline settings');
		console.log(this.props);
		return (
			<Pane
				title="Settings"
				closeable={true}
				views={this.paneContent()}
				ref="headlineSettingsPane"
				visible={this.props.visible}
			/>
		);
	}

}