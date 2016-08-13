import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

//Pane Views
import SectionTypographyView from './SectionTypographyView.js';
import SectionEffectsView from './SectionEffectsView.js';
import SectionLayoutView from './SectionLayoutView.js';

export default class SectionSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id : 'section-typography-view',
				title : 'Type',
				Component : SectionTypographyView
			},
			{
				id : 'section-effects-view',
				title : 'Effects',
				Component : SectionEffectsView

			},
			{
				id : 'section-layout-view',
				title : 'Layout',
				Component : SectionLayoutView
			}
		];
	}

	render () {
		return (
			<Pane
				paneClass="wide"
				paneHeight={317}
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


