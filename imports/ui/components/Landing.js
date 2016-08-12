import React, { Component } from 'react';

import '../sass/components/ds-landing';

//import InlineSVG from 'svg-inline-react';

import DSLogo from '../assets/icons/temp-logo.js';

export default class Landing extends Component {

	handleNewsletterSubmit (event) {
		event.preventDefault();
		console.log('sign me up yo');
		//TODO validate email
		//TODO call mailchimp
	}

	render () {
		return (
			<div className="ds-page-section ds-landing">
				<div className="section-content">
					<div className="container">
						<DSLogo className="logo" />

						<p>Easy, elegant, single page websites. <br/>Sign up and we will give you a heads up when we launch.</p>
						<form className="newsletter-form">
							<input type="text" id="newsletter" placeholder="drop@splash.com" />
							<button onClick={this.handleNewsletterSubmit.bind(this)} className="medium" htmlFor="newsletter">Let me know</button>
						</form>
						<p><a href="/login">Login</a></p>
					</div>
				</div>
			</div>
		);
	}

};