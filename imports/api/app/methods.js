import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { App } from './app.js';
import { Pages } from '../pages/pages.js';
import { Sections } from '../sections/sections.js';

export const initialize = new ValidatedMethod({
	name: 'app.initialize',
	validate : null,
	run() {
		if (!this.isSimulation) {
			console.log('APP INIT RUNNING');
			if (!this.userId) {
				throw new Meteor.Error('app.initialize.notLoggedIn',
					'Must be logged in to start the app.');
			}

			var pageId;
			var appId;


			//Create an App for this user
			if(App.find({userId : this.userId}).count() === 0) {
				appId = App.insert({userId:this.userId});
			}

			//TODO Get default Page settings from App
			//if we actually need them


			//Create a Page for this user
			if (Pages.find({ownerId : this.userId}).count() === 0) {
				console.log('creating a page');
				pageId = Pages.insert({ownerId : this.userId});
			} else {
				console.log('finding a page');
				console.log(Pages.findOne({ownerId : this.userId}));
				pageId = Pages.findOne({ownerId : this.userId})._id;
			}

		return pageId;
		}

	}
});



//TODO Save Last Section Styles

//updateDefaultPageStyles
//updateDefaultSectionStyles
//updateDefaultContainerStyles


//Save Settings



