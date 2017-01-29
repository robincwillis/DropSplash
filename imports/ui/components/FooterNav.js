import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

//Collections
import { Pages } from '../../api/pages/pages.js';
import { Sections } from '../../api/sections/sections.js';
//API
import { insertSection } from '../../api/sections/methods.js';

//Icons
import PlusIcon from '../assets/icons/plus-icon.js';
import ForwardsArrow from '../assets/icons/arrow-2-forwards.js';
import SettingsIcon from '../assets/icons/settings-icon.js';
import InlineSVG from 'svg-inline-react';
import ReorderSectionsIcon from '../assets/icons/reorder-sections.js';

//Components
import Button from './Common/Button';

//Styles
import '../sass/components/footer-nav';

class FooterNav extends Component {

	createSection (event) {
		event.preventDefault();
		const sectionId = insertSection.call({pageId : this.props.page._id},(err) => {
			if (err) {
				console.log('inserting section fucked');
				console.log(err);
			} else {
				//TODO scroll to section
				//var objDiv = document.querySelector(".app-content");
				var lastSection = document.querySelector('.ds-page-section-container:last-child');
				let scrollContainer = document.querySelector('.content-wrap');

				// Begin Scroll Animation
				function scrollTo(element, to, duration) {
				  var start = element.scrollTop,
				      change = to - start,
				      currentTime = 0,
				      increment = 20;
				      
				  var animateScroll = function(){        
				      currentTime += increment;
				      var val = Math.easeInOutQuad(currentTime, start, change, duration);
				      element.scrollTop = val;
				      if(currentTime < duration) {
				          setTimeout(animateScroll, increment);
				      }
				  };
				  animateScroll();
				}

				//t = current time
				//b = start value
				//c = change in value
				//d = duration
				Math.easeInOutQuad = function (t, b, c, d) {
				t /= d/2;
				if (t < 1) return c/2*t*t + b;
				t--;
				return -c/2 * (t*(t-2) - 1) + b;
				};
				// End Scroll Animation

				// scrollTo(scrollContainer, lastSection.getBoundingClientRect().top, 750);

				setTimeout(function() {
					// lastSection.scrollIntoView();
					scrollTo(scrollContainer, lastSection.getBoundingClientRect().top, 750);
					lastSection = document.querySelector('.ds-page-section-container:last-child');
				}, 10);

			}
		});
	}

	togglePageSettings (event) {
		event.preventDefault();
		if(this.props.settingsOpen) {
			FlowRouter.go('/'+this.props.pageId);
		} else {
			FlowRouter.go('/'+this.props.pageId+'/settings');
		}
		//var pageId  = FlowRouter.
		//var path = FlowRouter.current().path;
		//if settings is open kill it
		//FlowRouter.getQueryParam(queryStringKey);

	}

	previewPage (event) {
		event.preventDefault();

	}

	render () {

		const logoutStyles = {
			'width': 30,
			'fontSize':14
		};

		return (
			<div id="Bottom" className="footer-nav">
				<div className="left-items">
					<div onClick={this.togglePageSettings.bind(this)} className="link"><InlineSVG src={SettingsIcon} element="span" className="icon" />Settings</div>
				</div>
				<div className="center-items">
					<Button
						clickEvent={this.createSection.bind(this)}
						buttonClass="tiny"
						label="Add Page Section"
						icon={PlusIcon}
					/>

					<Button
						buttonClass="tiny reorder-sections"
						tooltip-text="Reorder Sections"
						label="Reorder Sections"
						icon={ReorderSectionsIcon}
					/>

					<a style={logoutStyles} className="button tiny" href="/logout">∆</a>

				</div>
				<div className="right-items">
					<div className="link">Preview<InlineSVG src={ForwardsArrow} element="span" className="icon" /></div>
				</div>
			</div>
		);

	}
}

FooterNav.PropTypes = {

};

export default createContainer( () => {

	Meteor.subscribe('pages');

	return {
		page: Pages.findOne(),
		sections : Sections.find().fetch(),
		currentUser: Meteor.user()
	};

}, FooterNav);


