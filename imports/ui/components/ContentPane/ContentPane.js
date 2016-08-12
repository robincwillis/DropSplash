import React, { Component } from 'react';

//Icons

//Components
import Pane from '../Common/Pane.js';

//Pane Views
import ContentTypes from './ContentTypesView';

import '../../sass/components/common/buttons.scss';
import '../../sass/components/common/add-content-pane.scss';

//API
import { insertWidget } from '../../../api/widgets/methods.js';

export default class ContentPane extends Component {

	constructor (props) {
		super(props);
		this.selectContentType = this.selectContentType.bind(this);
	}

	createContentWidget (type, options) {
		const widgetId = insertWidget.call({
			sectionId : this.props.section._id,
			type : type + '_WIDGET',
			options : options
		}, (err) => {
			if (err) {
				console.log(err);
			}
		});

		if(this.props.closeable && this.props.hideContentPane) {
			this.props.hideContentPane();
		}

	}

	selectContentType (type) {

		switch (type) {
			case 'HEADLINE':
				this.createContentWidget(type, {content : 'A Headline'});
			break;
			case 'PARAGRAPH':
				this.createContentWidget(type);
			break;
			case 'IMAGE':
				this.createContentWidget(type);
			break;
			case 'VIDEO':
				this.createContentWidget(type);
			break;
			case 'AUDIO':
				this.createContentWidget(type);
			break;
			case 'MAP':
				this.createContentWidget(type);
			break;
			case 'MEDIUM':
				this.createContentWidget(type);
			break;
			case 'BUTTON':
				this.createContentWidget(type);
			break;
			case 'DIVIDER':
				this.createContentWidget(type);
			break;
			case 'TWITTER':
				this.createContentWidget(type);
				//EX go to a specific view
				//this.refs.addContentPane.goToView();
			break;
			case 'INSTAGRAM':
				this.createContentWidget(type);
			break;
			case 'MAILCHIMP':
				this.createContentWidget(type);
			break;
		}

		//console.log('selected a content type');
		// console.log(type);
		// headline, paragraph, divider, image
			//create the widget
		//console.log(this);
		// map, medium, button, twitter, instagram, and mail chimp

	}

	paneContent () {
		//all the views we can cycle through
		return [
			{
				id : 'select-content-type',
				title: 'Select Content',
				Component: (<ContentTypes selectContentType={this.selectContentType} />)
			}
		];

	}

	clickHandler () {
		this.refs.addContentPane.goToNextView();
	}

	//select Content Type
	//when I click one of the buttons. I want to progress the pane to the
	//create step for that content



	render () {
		return (
			<Pane
				closeable={this.props.closeable ? this.props.closeable : true}
				visible={this.props.visable ? this.props.visable : true}
				paneClass="add-content-pane wide"
				title="Add Content"
				views={this.paneContent()}
				paneHeight="317px"
				ref="addContentPane"
				{...this.props}
			/>
		);
	}
}