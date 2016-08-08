
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';

import MainLayout from '../../ui/layouts/main.js';
import AppLayout from '../../ui/layouts/app.js';

import Landing from '../../ui/components/Landing.js';

import Login from '../../ui/components/Login.js';
import Signup from '../../ui/components/Signup.js';
import ForgotPassword from '../../ui/components/ForgotPassword.js';

import App from '../../ui/components/App.js';
import FooterNav from '../../ui/components/FooterNav.js';
import Settings from '../../ui/components/Settings.js';

import { initialize } from '../../api/app/methods.js';

import { Pages } from '../../api/pages/pages.js';

const mounter = withOptions({
		rootId: 'root',
		rootProps: {'className': 'region-app'}
}, mount);

/*

Routes:

/
/login
/signup
/logout
/users/:id
/pages/:id

/404 not found
/401 not auth
/500 error

Layouts

//landing (public)
//page(splash) edit (private)
//page(splash) view (public)
//page(splash) preview (private)
//page(splash) settings (private)

*/

let publicRoutes = FlowRouter.group({
	triggersEnter: [function(context, redirect) {
		var path = FlowRouter.current().path;

		// if ( Meteor.loggingIn() || Meteor.userId() && path !== '/logout' ) {
		// 	FlowRouter.go('pizza');
		// }
	}]
});

let privateRoutes = FlowRouter.group({
	triggersEnter: [function(context, redirect) {
		console.log('running group triggers');
		if ( Meteor.loggingIn() || Meteor.userId() ) {
			console.log('do nothing yo');
		} else {
			let route = FlowRouter.current();
			if (route.route.name !== 'login') {
				console.log(route.path);
				Session.set('redirectAfterLogin', route.path);
			}
			FlowRouter.go('login');
		}
	}]
});

let publishedRoutes = FlowRouter.group({

});

// ========
// Home
// ========
publicRoutes.route( '/', {
	name: 'home',
	action() {
		mounter(MainLayout, {
			//header: false,
			content: <Landing />
			//footer: false
		});
	}
});

// ========
// Auth
// ========

publicRoutes.route( '/login', {
	name: 'login',
	action() {
		mounter(MainLayout, {
			content : <Login />
		});
	}
});

publicRoutes.route( '/signup', {
	name: 'signup',
	action() {
		mounter(MainLayout, {
			content : <Signup />
		});
	}
});

publicRoutes.route('/forgot-password', {
	name: 'forgotPassword',
	action () {
		mounter(MainLayout, {
			content : <ForgotPassword />
		});
	}
});

publicRoutes.route('/logout', {
	name: 'logout',
	action () {
		console.log('logging you out');
		Meteor.logout( () => {
			FlowRouter.go("/login");
		});
	}
});


//THIS IS A WEIRD PLACE FOR THIS
Accounts.onLogin(function() {
	var path = FlowRouter.current().path;
	//Meteor.logoutOtherClients()
	initialize.call({}, (err, res) => {
		if (err) {
			FlowRouter.go('/');
			console.log('ERROR: Could not create splash page.');
			console.log(err);
		} else {
			if(path !== '/'+res){
				FlowRouter.go('/'+res);
			}
		}
	});
});

// ========
// Pages
// ========

//TODO This should only be public if published is true
//TODO This should be a whole new html entrypoint
publicRoutes.route( '/:pageId', {
	name: 'splash',
	action(params, queryParams) {
		mounter(AppLayout, {
			content: <App />,
			footer: <FooterNav />
		});
	}
});

// Settings
publicRoutes.route( '/settings', {
//privateRoutes.route( '/:pageId/settings', {
	name: 'splash settings',
	action(params, queryParams) {

		console.log('something is going to settings');

		mounter(AppLayout, {
			//content: <App />,
			settings: <Settings />,
			//footer: <FooterNav />
		});
	}
});

// Edit
// privateRoutes.route('/:pageId/edit', {
// 	name: 'edit splash',
// 	action(params, queryParams) {
// 		mounter(AppLayout, {
// 			content: <App />,
// 			footer: <FooterNav />
// 		});
// 	}
// });

//Preview


//Not Found
FlowRouter.notFound = {
	// Subscriptions registered here don't have Fast Render support.
	subscriptions: function() {
	},
	action: function() {
		console.log('not found action running');
	}
};
