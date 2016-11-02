import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import TypographyView from '../CommonPane/Typography.js';
import LayoutView from '../CommonPane/Layout.js';

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
					widget : this.props.widget,
					key : '1'
				}
			},
			{
				id: 'headline-layout-view',
				title: 'Layout',
				Component: LayoutView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget: this.props.widget,
					key : '2'
				}
			}
		];
	}

	render () {
		return (
			<Pane
				title="Settings"
				closeable={true}
				paneTabs={true}
				views={this.paneContent()}
				ref="headlineSettingsPane"
				visible={this.props.visible}
				paneHeight="302px"
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}