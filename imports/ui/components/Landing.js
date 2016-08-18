import React, { Component } from 'react';


import Logo from './Logo.js';

import '../sass/components/ds-landing.scss';

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
			<div className="ds-landing">
				<div className="ds-page-section full-height intro-section">
					<div className="section-content">
						<div className="container">
							<Logo />
							<div className="logotype">
								<DSLogo />
							</div>
							<h2>Create elegant websites  within minutes for free.</h2>
							<div className="intro-form">
								<form className="newsletter-form">
									<input type="text" id="newsletter" placeholder="drop@splash.com" />
									<button onClick={this.handleNewsletterSubmit.bind(this)} className="medium" htmlFor="newsletter">Let me know</button>
								</form>
								<div className="under-form">
									<div className="right">
										<span>We are not going to spam you. For real.</span>
									</div>
									<div className="left">
										<a href="/login">Login</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="arrow-wrapper">
						<span className="arrow"></span>
					</div>
				</div>
				<div className="ds-page-section ds-landing auto-height description-section">
					<div className="section-content">
						<div className="container">
							<h3>What's a splash page?</h3>
							<hr/>
							<p>Splash pages, or one page websites, a great for promote a budding business, create a home for your mobile app, or event. Take your online presence to the next level. Make a splash.</p>
						</div>
					</div>
				</div>
				<div className="ds-page-section ds-landing auto-height examples-section">
					<div className="section-content">
						<div className="container">
							<h3>What you can do with DropSplash</h3>
							<hr/>
							<p>A showcase of what you can do with DropSplash. Collect emails for your next campaign. Show social media feeds with instagram, twitter, soundcloud, and medium.</p>
						</div>
						<div className="container wide">	
							<div className="example-grid">
								<div className="example">
									<img src="http://unsplash.it/900/600" />
								</div>
								<div className="example">
									<img src="http://unsplash.it/600/400" />
								</div>
								<div className="example">
									<img src="http://unsplash.it/1200/800" />
								</div>
								<div className="example">
									<img src="http://unsplash.it/600/400" />
								</div>
								<div className="example">
									<img src="http://unsplash.it/666/444" />
								</div>
								<div className="example">
									<img src="http://unsplash.it/633/422" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ds-page-section ds-landing auto-height bottom-signup-section">
					<div className="section-content">
						<div className="container">
							<h3>Sign up and we’ll give you a heads up when we launch.</h3>
							<form className="newsletter-form">
								<input type="text" id="newsletter" placeholder="drop@splash.com" />
								<button onClick={this.handleNewsletterSubmit.bind(this)} className="medium" htmlFor="newsletter">Let me know</button>
							</form>
						</div>
					</div>
				</div>
				<footer>
				</footer>
			</div>
		);
	}

};