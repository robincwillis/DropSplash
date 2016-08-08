import { Meteor } from 'meteor/meteor';


import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Pages } from '../pages/pages.js';
import { Blocks } from '../blocks/blocks.js';



const blockDefaults = {

};

export const initialize = new ValidatedMethod({
	name: 'app.initialize',
	validate : null,
	run() {
		//if(Meteor.isServer) {
		console.log('APP INIT RUNNING');
		if (!this.userId) {
			throw new Meteor.Error('app.initialize.notLoggedIn',
				'Must be logged in to start the app.');
		}

			var pageId;


			const pageDefaults = {
				ownerId : this.userId
			};

			console.log('defaults');
			console.log(pageDefaults);
			console.log(Pages.find().fetch());

			console.log(Pages.find().count());


			//Create a Page
			if (Pages.find().count() === 0) {
				console.log('creating a page');
				pageId = Pages.insert(pageDefaults);
			} else {
				pageId = Pages.find({ownerId : this.userId});
			}

			if (Blocks.find().count() === 0) {
				console.log('we dont have any blocks either');
			}


		console.log('all done here');
		return pageId;
		//}

		return 'asdfadsf';
		//insert a page
		//insert a block into that page
		//insert a widget into that block
		//return Lists.insert({});
	}
});

