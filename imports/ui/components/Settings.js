import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import InlineSVG from 'svg-inline-react';

//Collections
import { Pages } from '../../api/pages/pages.js';

//Icons
// import PlusIcon from 'assets/icons/plus-icon';
// import ForwardsArrow from 'assets/icons/arrow-2-forwards';
// import SettingsIcon from 'assets/icons/settings-icon';
import CloseX from '../assets/icons/close-x.js';

//Components
import Button from './Common/Button.js';
import Switch from './Common/Switch.js';

import '../sass/components/settings.scss';

class Settings extends Component {

	closePageSettings (event) {
		FlowRouter.go('/'+this.props.pageId);
	}

	savePageSettings (event) {
		//Todo
		FlowRouter.go('/'+this.props.pageId);
	}

	render () {

		if(this.props.loading){
			return (<div>loading</div>);
		}

		console.log(this.props);

		return (
			<div className="settings-panel">
				<div className="settings-block settings-header">
					<span className="panel-title small-caps">Settings</span>
					<InlineSVG onClick={this.closePageSettings.bind(this)} src={CloseX} element="span" className="close-x" />
				</div>

				<div className="settings-content">
					<div className="settings-block publish-status">
						<Switch />
					</div>
					<div className="settings-block">
						<div className="settings-block-title small-caps"><span className="text">DropSplash URL</span></div>
						<p><a href="#">http://dropsplash.com/{this.props.pageId}</a></p>
						<Button buttonClass="tiny secondary" label="Use a custom domain" />
					</div>
					<div className="settings-block">
						<div className="settings-block-title small-caps"><span className="text">SEO</span></div>
						<p className="section-desc">This information will be used for search engine optimization. When someone searches for you page, this is the info that will come up.</p>
						<div className="fancy-input-wrap dark">
							<input required="required" type="text" value={this.props.page.title} />
							<label>{this.props.page.title}</label>
						</div>
						<div className="fancy-input-wrap dark">
							<input required="required" type="text" />
							<label>Description</label>
						</div>
					</div>
					<div className="settings-block">
						<div className="settings-block-title small-caps"><span className="text">Account Info</span></div>
						<div className="fancy-input-wrap dark">
							<input required="required" type="text" value="drop@splash.com" />
							<label>Email</label>
						</div>
						<div className="fancy-input-wrap dark">
							<input required="required" type="password" />
							<label>Password</label>
						</div>
					</div>
				</div>

				<div className="save-settings">
					<Button clickEvent={this.savePageSettings.bind(this)} label="Save Changes" />
				</div>
				</div>
		);

	}
}

Settings.PropTypes = {

};

export default createContainer( () => {

	const pagesHandle = Meteor.subscribe('pages');
	const loading = !pagesHandle.ready();

	return {
		loading,
		page: Pages.findOne()
	};

}, Settings);


