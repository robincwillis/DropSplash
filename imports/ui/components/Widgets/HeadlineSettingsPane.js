import React, { Component } from 'react';

//Components
import Pane from '../Common/Pane.js';

//Pane Views
//Typography
//Font
//Color

export default class HeadlineSettingsPane extends Component {

	constructor (props) {
		super(props);
	}

	paneContent () {
		return [
			{

			}
		];
	}


	render() {
		return (
			<Pane
				views={this.paneContent}
				ref="headlineSettingsPane"
			/>
		);
	}

}