import React, { Component } from 'react';

import Button from '../Common/Button';

import { WidgetTypes } from '../../../api/widgets/schema.js';


export default class AccountLinkView extends Component {

	linkAccount () {
		//
	Meteor.loginWithInstagram({
		loginStyle: 'popup'
	},
		function (err) {
		if (err) {
			console.log('login failed', err);
		} else {
			console.log('login success', Meteor.user());
			//render the success state
		}
	});
		//if all good go to account link complete
		//which probably needs to passed in from above
	}

	renderComplete () {
		return (
			<div className="has-button" key="view1">
				<div className="content linked-account pane-padded v-center">
					<div className="v-content">
						<InlineSVG src={InstagramIcon} element="span" className="icon" />
						<span className="small-caps ds-green">Linked Account</span>
						<p>Instagram</p>
					</div>
				</div>
				<div className="pane-view-actions">
					<Button
						buttonClass="medium tertiary"
						label="Edit Account Info"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);
	}

	renderUnlink () {

	}

	renderForm () {
		return (
			<form>
				<div className="row">
					<label>Username</label>
					{/* disabled="disabled" */}
					<input className="lg" type="text" placeholder="@username" />
				</div>
				<div className="row">
					<label>Password</label>
					<input className="lg" type="password" />
				</div>
			</form>
		);
	}

	render () {

		return (
			<div className="has-button" key="view1">
					<div className="content pane-padded">
						<p> were gonna take you to instagram to authorize access from Dropsplash to your posts</p>
					</div>
					<div className="pane-view-actions">
						<Button
							buttonClass="medium"
							label="Link Account"
							clickEvent={this.linkAccount.bind(this)}
						/>
					</div>
				</div>
		);
	}
}



