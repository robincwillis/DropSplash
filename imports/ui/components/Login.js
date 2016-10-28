
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InlineSVG from 'svg-inline-react';
import Button from './Common/Button.js';
import Logo from '../assets/icons/ds-logo-sm.js';

import '../sass/components/login';

export default class Login extends Component {

	constructor (props) {
		super(props);
		this.state = {
				email: '',
				password: '',
				rememberMe: true,
				errorMessage: null
		};
	}

	submitIfEnter (event) {
		if (event.keyCode === 13) {
				this.login(event);
		}
	}

	updateState (event) {
			var obj = {};
			obj[event.target.name] = event.target.value;
			this.setState(obj);
	}

	login (event) {
		event.preventDefault();
		let email = this.state.email;
		let password = this.state.password;

		//validate email
		//make sure email isn't blank
		//make sure password isn't blank

		Meteor.loginWithPassword(email, password, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				console.log(res);
			}
		} );

	}

	//Move to social login button component with props
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

	handleRememberMeCheckbox (event) {
		this.setState({rememberMe: event.target.checked});
	}

	render () {
		return (
			<div className="ds-page-section ds-login full-height">
				<div className="v-center">
					<InlineSVG
						src={Logo}
						element="div"
						className="login-logo" 
					/>
					<div className="ds-login-form">
						<div className="fancy-input-wrap">
							<input
								className="login-input"
								required
								type="text"
								name="email"
								onChange={this.updateState.bind(this)}
								onKeyDown={this.submitIfEnter.bind(this)}
							/>
							<label>Email</label>
						</div>
						<div className="fancy-input-wrap">
							<input
								className="login-input"
								required type="password"
								name="password"
								onChange={this.updateState.bind(this)}
								onKeyDown={this.submitIfEnter.bind(this)}
							/>
							<label>Password</label>
						</div>
						<div className="login-row">
							<div className="remember-me">
								<input type="checkbox" onChange={this.handleRememberMeCheckbox.bind(this)} checked={this.state.rememberMe} id="remember-me" /><label htmlFor="remember-me"><span className="checkbox"></span>Remember me</label>
							</div>
							<a className="forgot" href="/forgot-password">Forgot Password?</a>
						</div>
						<Button
							clickEvent={this.login.bind(this)}
							buttonClass="medium login"
							label="Login"
						/>
						<span className="alt-login-divider small-caps">Or login with</span>
						<div className="login-with">
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
				</div>
				<p className="ds-signup-prompt">
					Dont have an account?
					<a className="button tiny secondary" href="/signup">Sign Up</a>
				</p>
			</div>

		);
	}



}