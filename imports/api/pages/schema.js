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

	//TODO settings object
	settings : {
		type : Object,
		blackbox: true,
		optional : true
	},
	//TODO styles object
	styles : {
		type : Object,
		blackbox: true,
		optional : true
	},
	//TODO sections
	sections : {
		type : [String],
		optional : true
	}

});

Pages.attachSchema( PageSchema );

