import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Sections } from './sections.js';

export const SectionSchema = new SimpleSchema({

	ownerId : {
		type : String,
		optional : false
	},

	pageId : {
		type : String,
		optional : false
	},

	//TODO really index sections
	index :  {
		type : Number,
		optional : false
	},

	initialSection : {
		type : Boolean,
		optional : false,
		defaultValue : false
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

	containerStyles : {
		type : Object,
		blackbox : true,
		optional : true
	},

	widgets : {
		type : [String],
		optional : true
	}
});

Sections.attachSchema( SectionSchema );
