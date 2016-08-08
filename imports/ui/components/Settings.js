import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
// import PlusIcon from 'assets/icons/plus-icon';
// import ForwardsArrow from 'assets/icons/arrow-2-forwards';
// import SettingsIcon from 'assets/icons/settings-icon';
import CloseX from '../assets/icons/close-x.js';

//Components
import Button from './Common/Button.js';
import Switch from './Common/Switch.js';

import '../sass/components/settings.scss';

export default class Settings extends Component {

	render () {

		return (
			<div className="settings-panel">
				<div className="settings-block settings-header">
					<span className="panel-title small-caps">Settings</span>
					<InlineSVG src={CloseX} element="span" className="close-x" />
				</div>

				<div className="settings-content">
					<div className="settings-block publish-status">
						<Switch />
					</div>
					<div className="settings-block">
						<div className="settings-block-title small-caps"><span className="text">DropSplash URL</span></div>
						<p><a href="#">http://dropsplash.com/mysplashpage</a></p>
						<Button buttonClass="tiny secondary" label="Use a custom domain" />
					</div>
					<div className="settings-block">
						<div className="settings-block-title small-caps"><span className="text">SEO</span></div>
						<p className="section-desc">This information will be used for search engine optimization. When someone searches for you page, this is the info that will come up.</p>
						<div className="fancy-input-wrap dark">
							<input required="required" type="text" value="Splash Page Title" />
							<label>Page Title</label>
						</div>
						<div className="fancy-input-wrap dark">
							<input required="required" type="password" />
							<label>Password</label>
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
					<Button label="Save Changes" />
				</div>
				</div>
		);

	}
}