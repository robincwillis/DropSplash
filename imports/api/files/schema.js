import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Files } from './files.js';

export const FileSchema = new SimpleSchema({

	ownerId: {
		type : String,
		optional : false
	},

	pageId: {
		type : String,
		optional : false
	},

	name: {
		type : String,
		optional : false
	},

	size: {
		type : String,
		optional : false
	},

	url: {
		type : String,
		optional : false
	},

	type: {
		type : String,
		optional : false
	},

	hash: {
		type : String,
		optional : false
	}

});

