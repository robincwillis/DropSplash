import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Pages } from './pages.js';

export const PageSchema = new SimpleSchema({

	//owner
	ownerId: {
		type : String,
		optional : false,
		unique : true
	},

	//title
	title :  {
		type: String,
		optional : false,
		defaultValue : 'My New Page'
	},

	description : {
		type : String,
		optional : false,
		defaultValue : 'My New Page Description'
	},

	dateCreated :  {
		type : Date,
		defaultValue : new Date(),
		optional : false
	},

	empty : {
		type : Boolean,
		defaultValue : true,
		optional : false
	},

	//TODO Unique Splash Name
	path : {
		type : String,
		optional : true,
		unique : true
	},

	published : {
		type : Boolean,
		defaultValue : false,
		optional : false
	},

	settings : {
		type : Object,
		blackbox: true,
		optional : true
	},

	styles : {
		type : Object,
		blackbox: true,
		optional : true
	},

	sections : {
		type : [String],
		optional : true
	},

	colors : {
		type : [Object],
		blackbox: true,
		defaultValue : [{
			hex : '#000000',
			rgb : {r:0,b:0,g:0,a:1},
			alpha : 1
		},{
			hex : '#ffffff',
			rgb : {r:255,b:255,g:255,a:1},
			alpha : 1
		}]
	}
});

Pages.attachSchema( PageSchema );

