import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

//Pane Views
import AllFontsView from './AllFontsView';
import SansFontView from './AllFontsView';
import SerifFontView from './AllFontsView';
import MonoFontView from './AllFontsView';

import '../../sass/components/common/fonts-pane';

import { updateSectionSettings, updateSectionStyles, updateSectionContainerStyles } from '../../../api/sections/methods.js';

export default class SectionSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{
				id : 'all-fonts-view',
				title : 'All',
				Component : AllFontsView,
				props : {
					key : '1',
					section : this.props.section
				}
			},
			{
				id : 'sans-fonts-view',
				title : 'Sans',
				Component : SansFontView,
				props : {
					key : '2',
					section : this.props.section,
				}
			},
			{
				id : 'serif-fonts-view',
				title : 'Serif',
				Component : SerifFontView,
				props : {
					key : '3',
					section : this.props.section
				}
			},
			{
				id : 'mono-fonts-view',
				title : 'Mono',
				Component : MonoFontView,
				props : {
					key : '4',
					section : this.props.section
				}
			}
		];
	}

	render () {
		return (
			<Pane
				paneClass="fonts-pane"
				paneWidth="280px"
				paneTabs={true}
				closeable={true}
				visible={true}
				title="Fonts"
				views={this.paneContent()}
				ref="FontsPane"
		/>
		);
	}

}
