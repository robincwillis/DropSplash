import React, { Component } from 'react';

import Button from './Common/Button.js';

import '../sass/components/login';

export default class Signup extends Component {


	constructor (props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmation: '',
			errorMessage: null
		};
	}

	submitIfEnter (event) {
		if (event.keyCode === 13) {
				this.signup(event);
		}
	}

	updateState (event) {
		var obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	}

	signup (event) {
		event.preventDefault();
		let email = this.state.email;
		let password = this.state.password;
		let confirmation = this.state.confirmation;
		console.log(this.state);
		if(password !== confirmation) {
			console.log('passwords dont match');
			return;
		}

		Accounts.createUser({
				email: email,
				password: password
		}, (err, res) => {
			console.log(arguments);
			if (err) {
				console.log(err);
			} else {
				console.log(res);
			}
		});

	}

	handleSocialLoginClick (event) {
		const service = event.currentTarget.getAttribute( 'data-social-login' );
		const options = {
				requestPermissions : [ 'email' ]
		};
		if (service === 'loginWithTwitter') {
			delete options.requestPermissions;
		}

		Meteor[ service ]( options, ( error ) => {
			if ( error ) {
				console.log( error.message );
			}
		});
	}

	render () {
		return (
			<div className="ds-page-section ds-login full-height">
				<div className="v-center">
					<div className="ds-login-form">
						<div className="fancy-input-wrap">
							<input
								className="login-input"
								required
								name="email"
								type="text"
								onChange={this.updateState.bind(this)}
								onKeyDown={this.submitIfEnter.bind(this)}
							/>
							<label>Email</label>
						</div>
						<div className="fancy-input-wrap">
							<input
								className="login-input"
								required
								name="password"
								type="password"
								onChange={this.updateState.bind(this)}
								onKeyDown={this.submitIfEnter.bind(this)}
							/>
							<label>Password</label>
						</div>
						<div className="fancy-input-wrap">
							<input
								className="login-input"
								required
								name="confirmation"
								type="password"
								onChange={this.updateState.bind(this)}
								onKeyDown={this.submitIfEnter.bind(this)}
							/>
							<label>Confirm Password</label>
						</div>
						<Button
							clickEvent={this.signup.bind(this)}
							buttonClass="medium login"
							label="Sign Up"
						/>
						<span className="alt-login-divider small-caps">Or log in with</span>
						<Button
							clickEvent={this.handleSocialLoginClick}
							buttonClass="medium google-login"
							label="Google"
							extraProps={{'data-social-login' : 'loginWithGoogle'}}
						/>
						<Button
							clickEvent={this.handleSocialLoginClick}
							buttonClass="medium twitter-login"
							label="Twitter"
							extraProps={{'data-social-login' : 'loginWithTwitter'}}
						/>
						<Button
							clickEvent={this.handleSocialLoginClick}
							buttonClass="medium facebook-login"
							label="Facebook"
							extraProps={{'data-social-login' : 'loginWithFacebook'}}
						/>
					</div>
				</div>
				<p className="ds-signup-prompt">
					Already have an account?
					<a className="button tiny secondary" href="/login">Login</a>
				</p>
			</div>
		);
	}
}