import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Components
import PageSection from './Common/PageSection';

//Collections
import { Pages } from '../../api/pages/pages.js';
import { Sections } from '../../api/sections/sections.js';

//API
import { insertSection } from '../../api/sections/methods.js';
import { updatePage } from '../../api/pages/methods.js';

class Page extends Component {

	constructor (props) {
		super(props);
	}

	renderPageSections () {

		return this.props.sections.map( (section) => {
			return (
				<ReactCSSTransitionGroup
					key={section._id}
					transitionName='ds-section-transition'
					transitionAppear={true}
					transitionAppearTimeout={3200}
					transitionEnterTimeout={3200}
					transitionLeaveTimeout={3200}
				>
					<PageSection
						key={section._id}
						section={section}
						empty={this.props.page.empty}
					/>
				</ReactCSSTransitionGroup>
			);

		});

	}

	render () {
		return (
			<div className="content-wrap">
				{this.renderPageSections()}
			</div>
		);
	}
}

Page.propTypes = {
};

//TODO get page section subscriptions by pageId
export default createContainer( ({page : {_id}}) => {

	const sectionsHandle = Meteor.subscribe('sections.inPage', _id);
  //Meteor.subscribe('sections');
  const loading = !sectionsHandle.ready();
	const page = Pages.findOne(_id);
  const pageExists = !loading && !!page;
	//if sections is empty create initial section
	if(!loading && pageExists && page.empty && Sections.find().count() === 0) {
		//TODO Pick a random background
		const sectionOptions = {
			initialSection : true
		};
		const sectionId = insertSection.call({pageId : page._id, options : sectionOptions},(err) => {
			if (err) {
				console.log('inserting section fucked');
				console.log(err);
			}
		});

		const pageId = updatePage.call({pageId : page._id, pageAttributes : {empty : false}},(err) => {
			if (err) {
				console.log('updating page fucked');
				console.log(err);
			}
		});

	}

  return {
		loading,
		pageExists,
    sections: pageExists ? page.sections().fetch() : []
  };
}, Page);

