import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';
import UrlView from '../CommonPane/Url.js';
import MapView from '../CommonPane/Map.js';
import LayoutView from '../CommonPane/Layout.js';

export default class MapSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id: 'map-url-view',
				title: 'Url',
				Component: UrlView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '1'
				}
			},
			{
				id: 'map-settings-view',
				title: 'Settings',
				Component: MapView,
				props : {
					hidePane: this.props.hideSettingsPane,
					widget : this.props.widget,
					key : '2'
				}
			},
			{
				id: 'map-layout-view',
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
				ref="mapSettingsPane"
				visible={this.props.visible}
				onHide={this.props.hideSettingsPane}
			/>
		);
	}

}