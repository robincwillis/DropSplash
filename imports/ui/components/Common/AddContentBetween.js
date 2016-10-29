import React, { Component } from 'react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import ContentPane from '../ContentPane/ContentPane.js';
import Button from './Button.js';

import '../../sass/components/common/add-content-between.scss';

export default class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			contentPaneVisible : false,
			addContentBetweenActive : false
		};
	};

	hideContentPane () {
		this.setState({
			contentPaneVisible : false,
			addContentBetweenActive :false
		});
	}

	showContentPane () {
		this.setState({
			contentPaneVisible : true
		});
	}

	handleAddContentClick () {
		//need to keep the componenent visible until click outside
		//or close content
		this.showContentPane();
		this.setState({
			addContentBetweenActive :true
		})
	}

	addContentPane () {
		//Need to tell contentPane where to add the component
		return (<ContentPane
			hideContentPane={this.hideContentPane.bind(this)}
			section={this.props.section}
			closeable={true}
			index={this.props.index+1}
			visible={this.state.contentPaneVisible}
		/>);
	}

	render () {

		let className = 'add-content-between';
		if(this.state.addContentBetweenActive) {
			className += ' active';
		}

		return (
			<div className={className}>
				<div className="line">
					<Button
						buttonClass="tiny circle"
						tooltipText="Add Content"
						// tooltipPosition="top"
						clickEvent={this.handleAddContentClick.bind(this)}
						icon={PlusIcon}
						{...this.props}
					/>
				</div>
				{this.addContentPane()}
			</div>
		);

	}
}