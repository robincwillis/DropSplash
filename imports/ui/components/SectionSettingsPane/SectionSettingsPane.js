import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

//Pane Views
// import SectionTypographyView from './SectionTypographyView.js';
import SectionTypographyView from '../CommonPane/Typography.js';
import SectionEffectsView from './SectionEffectsView.js';
import SectionLayoutView from './SectionLayoutView.js';

import { updateSectionSettings, updateSectionStyles, updateSectionContainerStyles } from '../../../api/sections/methods.js';

export default class SectionSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	updateSectionStyles (styles) {
		console.log('updateSectionStyles');
		updateSectionStyles.call({
			sectionId : this.props.section._id,
			styles : styles
		}, (err) => {
			if(err) {
				console.log(err);
			}
		});
	}

	updateSectionContainerStyles (containerStyles) {
		console.log('updateSectionContainerStyles');
		updateSectionContainerStyles.call({
			sectionId : this.props.section._id,
			containerStyles : containerStyles
		}, (err) => {
			if(err) {
				console.log(err);
			}
		});
	}

	updateSectionSettings (settings) {
		console.log('uupdateSectionSettings');
		updateSectionSettings.call({
			sectionId : this.props.section._id,
			settings : settings
		}, (err) => {
			if(err) {
				console.log(err);
			}
		});
	}

	paneContent () {
		return [
			{
				id : 'section-typography-view',
				title : 'Type',
				Component : SectionTypographyView,
				props : {
					key : '1',
					section : this.props.section
				}
			},
			{
				id : 'section-layout-view',
				title : 'Layout',
				Component : SectionLayoutView,
				props : {
					key : '2',
					section : this.props.section,
					updateSectionStyles : this.updateSectionStyles.bind(this),
					updateSectionContainerStyles : this.updateSectionContainerStyles.bind(this),
					updateSectionSettings : this.updateSectionSettings.bind(this)
				}
			},
			{
				id : 'section-effects-view',
				title : 'Effects',
				Component : SectionEffectsView,
				props : {
					key : '3',
					section : this.props.section
				}

			}
		];
	}

	render () {
		return (
			<Pane
				paneClass="wide"
				paneTabs={true}
				closeable={true}
				visible={this.props.visible}
				title="Section Settings"
				views={this.paneContent()}
				ref="sectionSettingsPane"
		/>
		);
	}

}


