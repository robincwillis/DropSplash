import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Pages } from './pages.js';

//TODO Check login/admin on all methods

export const insertPage = new ValidatedMethod({
	name: 'page.insert',
	validate : null,
	run({title}) {

		return Pages.insert({
			ownerId : this.userId,
			title : title
		});

	}
});

export const updatePage = new ValidatedMethod({
	name: 'page.update',
	validate : null,
	run({pageId, pageAttributes}) {
		return Pages.update(pageId, {
      $set: pageAttributes
    });
	}
});

export const removePage = new ValidatedMethod({
	name: 'page.remove',
	validate : null,
	run({pageId}) {

	}
});

//upsert
//reset

// addColor
export const addColor = new ValidatedMethod({
	name : 'page.add.color',
	validate : null,
	run ({pageId, color}){
		let colors = Pages.findOne(pageId).colors;
		colors.push(color);
		Pages.update(pageId,  {$set: {colors : colors}});
		return color;
	}
});

// RemoveColor
export const removeColor = new ValidatedMethod({
	name : 'page.remove.color',
	validate : null,
	run ({pageId, color}){

		//get page colors
		//find color by index
		//remove it from array
		//save page
	}
});

// Meteor.methods({

// 	'pages.insert'(title) {
// 		console.log('trying to add a page');
// 		if (! this.userId) {
// 			throw new Meteor.Error('not-authorized');
// 		}

// 		Pages.insert({
// 			ownerId : this.userId,
// 			title : title
// 		});

// 	},

// 	'pages.update'(pageId, pageAttributes) {

// 	},

// 	'pages.delete'(pageId) {

// 	},



// });