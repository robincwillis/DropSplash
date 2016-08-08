import { Meteor } from 'meteor/meteor';
import { App } from '../../api/app/app.js';

if (Meteor.users.find().count() === 0 && App.find().count() === 0) {

	var god;
	var app;

	god = Accounts.createUser({
			profile: {name:'god'},
			email: 'god@ds.com',
			password: 'dropitlikeitsgod'
	});

	app = App.insert({userId : god});

}
