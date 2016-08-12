import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';


import Button from './Common/Button.js';
import BackArrow from '../assets/icons/arrow-2-back.js';

import '../sass/components/login';

export default class ForgotPassword extends Component {

	handleBackToLoginClick () {
		FlowRouter.go('login');
	}

	handleEmailRecoveryClick () {
		console.log("TODODODODODO");
	}


	render () {
		return (
			<div className="ds-page-section ds-login">
				<div className="v-center">
					<div className="ds-login-form">
						<div className="login-intro">
							<h6 className="small-caps">Password recovery</h6>
							<p>Please enter the email address that you used when creating your account.</p>
						</div>
						<div className="fancy-input-wrap">
							<input className="login-input" required type="text" />
							<label>Email</label>
						</div>
						<Button
							clickEvent={this.handleEmailRecoveryClick.bind(this)}
							buttonClass="medium login"
							label="Send Recovery Email"
						/>
						<Button
							clickEvent={this.handleBackToLoginClick.bind(this)}
							buttonClass="medium tertiary"
							label="Back to login"
							icon={BackArrow}
						/>
					</div>
				</div>
			</div>
		);
	}
}