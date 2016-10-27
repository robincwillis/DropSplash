import React, { Component } from 'react';

//Icons

//Components
import Pane from '../Common/Pane.js';

//Pane Views
import ContentTypes from './ContentTypesView';

//Account Link Views
import AccountLinkView from '../CommonPane/AccountLink.js';

//Instagram Pane Views
import InstagramSettingsView from '../Widgets/InstagramSettingsView.js';

import '../../sass/components/common/buttons.scss';
import '../../sass/components/common/add-content-pane.scss';

//API
import { insertWidget } from '../../../api/widgets/methods.js';

export default class ContentPane extends Component {

	constructor (props) {
		super(props);

		this.state = {
			title : 'Add Content'
		};

		this.selectContentType = this.selectContentType.bind(this);
	}



	paneViews () {
		//all the views we can cycle through
		//
		return [
			{
				id : 'select-content-type',
				title: 'Select Content',
				Component: ContentTypes,
				props : {
					selectContentType:this.selectContentType
				}
			},

			//Account Link
			{
				id : 'account-link',
				title : 'Account Link',
				Component: AccountLinkView
			},

			//Instagram Settings (possible step if account linked)
			{
				id : 'instagram-settings',
				title : 'Instagram Settings',
				Component: InstagramSettingsView
			}
		];

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
		let props = {};
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
			case 'BUTTON':
				this.createContentWidget(type);
			break;
			case 'DIVIDER':
				this.createContentWidget(type);
			break;
			case 'MEDIUM':
				props = {
					type : type,
					fields : ''
				};
				this.refs.addContentPane.goToViewById('account-link');
				this.updatePaneTitle('Medium');
			break;
			case 'TWITTER':
				props = {
					type : type,
					fields : ''
				};
				this.refs.addContentPane.goToViewById('account-link');
				this.updatePaneTitle('Twitter');
			break;
			case 'INSTAGRAM':
				props = {
					type : type,
					fields : ''
				};

				//is account linked?
				if(Meteor.user().services.instagram) {
					this.createContentWidget(type);
				} else {
					this.refs.addContentPane.goToViewById('account-link', props);
					this.updatePaneTitle('Instagram');
				}
			break;
			case 'MAILCHIMP':
				props = {
					type : type,
					fields : ''
				};
				this.refs.addContentPane.goToViewById('account-link');
				this.updatePaneTitle('MailChimp');
			break;
		}
	}

	updatePaneTitle (title) {
		this.setState({
			title : title
		});
	}

	onChangeView (view) {
		if(view === 0) {
			this.updatePaneTitle('Add Content');
		}
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
				title={this.state.title}
				views={this.paneViews()}
				onChangeView={this.onChangeView.bind(this)}
				paneHeight="317px"
				ref="addContentPane"
				{...this.props}
			/>
		);
	}
}