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

	setColor () {

	}

	setFont () {

	}

	setOpacity () {

	}

	paneContent () {
		return [
			{
				id: 'headline-typography-view',
				title: 'Type',
				Component: TypographyView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget
				}
			}
		];
	}

	render () {
		return (
			<Pane
				title="Settings"
				closeable={true}
				views={this.paneContent()}
				ref="headlineSettingsPane"
				visible={this.props.visible}
				paneHeight="302px"
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}