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
	}

});

Pages.attachSchema( PageSchema );

