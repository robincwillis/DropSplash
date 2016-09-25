import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';
import TrashIcon from '../../assets/icons/trash.js';

//Components
import Button from './Button.js';

//Panes
import ContentPane from '../ContentPane/ContentPane.js';
import SectionSettingsPane from '../SectionSettingsPane/SectionSettingsPane.js';
import BackgroundPane from '../BackgroundPane/BackgroundPane.js';
//TODO Fonts Pane

import '../../sass/components/common/section-controls.scss';

export default class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			showContentPane: false,
			showSectionSettingsPane: false,
			showBackgroundPane: false,
			showFontsPane: false
		};
	}

	scroll () {
		var appContainer = document.querySelector('.app-content');
		var sectionControls = document.querySelectorAll('.ds-section-controls');
    // console.log(appContainer.scrollTop)
    // console.log(sectionControls)
    for (var i = sectionControls.length - 1; i >= 0; i++) {
    	// console.log(sectionControls[i].offsetTop)
    }
	}

	componentDidMount () {
		var appContainer = document.querySelector('.app-content');
		appContainer.addEventListener('scroll', this.scroll);
	}

	showContentPane () {
		this.setState({
			showContentPane: true,
			showSectionSettingsPane: false,
			showBackgroundPane: false
		});
	}

	hideContentPane () {
		this.setState({
			showContentPane: false
		});
	}

	showSectionSettingsPane () {
		this.setState({
			showSectionSettingsPane: true,
			showContentPane: false,
			showBackgroundPane: false
		});
	}

	showBackgroundPane () {
		this.setState({
			showBackgroundPane: true,
			showContentPane: false,
			showSectionSettingsPane: false
		});
	}


	showFontsPane () {
		this.setState({showFontsPane: true});
	}

	addContentPane () {
		return (<ContentPane
			hideContentPane={this.hideContentPane.bind(this)}
			section={this.props.section}
			closeable={true}
			visible={this.state.showContentPane}
			/>);
	}

	sectionSettingsPane () {
		return (<SectionSettingsPane
			section={this.props.section}
			closeable={true}
			visible={this.state.showSectionSettingsPane}
			/>);
	}

	backgroundPane () {
		return (<BackgroundPane
			section={this.props.section}
			closeable={true}
			visible={this.state.showBackgroundPane}
		/>);
	}

	contentPaneButton () {
		if(this.props.widgets.length > 0) {
			return(<Button
				buttonClass="circle medium button-ripple add-content-button"
				icon={PlusIcon}
				clickEvent={this.showContentPane.bind(this)}
				tooltipText="Add Content"
				{...this.props}
			/>);
		} else {
			return false;
		}
	}

	render () {
		return (
			<div className="ds-section-controls">
				<div className="left-controls">
					{this.contentPaneButton()}
					{this.addContentPane()}
				</div>
				<div className="right-controls">
					<Button
						clickEvent={this.showSectionSettingsPane.bind(this)}
						buttonClass="delete-section circle secondary medium"
						icon={TrashIcon}
						tooltipText="Delete Section"
						tooltipPosition="left"
						{...this.props}
					/>
					<div className="button-group two-buttons">
						<Button
							clickEvent={this.showSectionSettingsPane.bind(this)}
							buttonClass="medium"
							label="Section Options"
							{...this.props}
						/>

						<Button
							clickEvent={this.showBackgroundPane.bind(this)}
							buttonClass="medium"
							label="Background"
							{...this.props}
						/>
					</div>
					{this.sectionSettingsPane()}
					{this.backgroundPane()}
				</div>
			</div>
		);

	}
}