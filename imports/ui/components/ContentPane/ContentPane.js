import React, { Component } from 'react';

//Icons

//Components
import Pane from '../Common/Pane.js';

//Pane Views
import ContentTypes from './ContentTypesView';

//Account Link Views
import AccountLinkView from '../CommonPane/AccountLink.js';

//Instagram Pane Views
import InstagramSettingsView from '../CommonPane/Instagram.js';

import '../../sass/components/common/buttons.scss';
import '../../sass/components/common/add-content-pane.scss';

//API
import { insertWidget, insertWidgetAfter } from '../../../api/widgets/methods.js';

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

	createContentWidget (type, options, index) {
		let data = {
			sectionId : this.props.section._id,
			type : type + '_WIDGET',
			options : options,
			index : index
		};

		if (index){
			const widgetId = insertWidgetAfter.call(data, (err, res)=> {
				if (err) {
					console.log(err);
				} else {
					console.log(res);
				}
			});
		} else {
			const widgetId = insertWidget.call(data, (err) => {
				if (err) {
					console.log(err);
				}
			});
		}

		if(this.props.closeable && this.props.hideContentPane) {
			this.props.hideContentPane();
		}

	}

	selectContentType (type) {
		let props = {};
		let options = {};
		let index = this.props.index;

		const ref = this.refs.addContentPane;
		const addContentPane = ref.getInstance();

		switch (type) {
			case 'HEADLINE':
				options.content = 'A Headline';
				this.createContentWidget(type, options, index);
			break;
			case 'PARAGRAPH':
				this.createContentWidget(type, options, index);
			break;
			case 'IMAGE':
				this.createContentWidget(type, options, index);
			break;
			case 'VIDEO':
				this.createContentWidget(type, options, index);
			break;
			case 'AUDIO':
				this.createContentWidget(type, options, index);
			break;
			case 'MAP':
				this.createContentWidget(type, options, index);
			break;
			case 'BUTTON':
				this.createContentWidget(type, options, index);
			break;
			case 'DIVIDER':
				this.createContentWidget(type, options, index);
			break;
			case 'MEDIUM':
				props = {
					type : type,
					fields : ''
				};
				addContentPane.goToViewById('account-link');
				this.updatePaneTitle('Medium');
			break;
			case 'TWITTER':
				props = {
					type : type,
					fields : ''
				};

				addContentPane.goToViewById('account-link');
				this.updatePaneTitle('Twitter');
			break;
			case 'INSTAGRAM':
				props = {
					type : type,
					fields : ''
				};

				//is account linked?
				if(Meteor.user().services.instagram) {
					this.createContentWidget(type, options, index);
				} else {
					addContentPane.goToViewById('account-link', props);
					this.updatePaneTitle('Instagram');
				}
			break;
			case 'MAILCHIMP':
				props = {
					type : type,
					fields : ''
				};
				addContentPane.goToViewById('account-link');
				this.updatePaneTitle('MailChimp');
			break;
			case 'GALLERY':
				this.createContentWidget(type, options, index);
			break;
			case 'SLIDESHOW':
				this.createContentWidget(type, options, index);
			break;
			case 'HTML':
				this.createContentWidget(type, options, index);
			break;
			case 'SOCIAL':
				this.createContentWidget(type, options, index);
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
				paneHeight="353px"
				ref="addContentPane"
				onHide={this.props.hideContentPane}
				{...this.props}
			/>
		);
	}
}