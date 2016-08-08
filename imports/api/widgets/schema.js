import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Widgets } from './widgets.js';

export const WidgetTypes = {
	HEADLINE_WIDGET : 'HEADLINE_WIDGET',
	PARAGRAPH_WIDGET : 'PARAGRAPH_WIDGET',
	IMAGE_WIDGET : 'IMAGE_WIDGET',
	BUTTON_WIDGET : 'BUTTON_WIDGET',
	VIDEO_WIDGET : 'VIDEO_WIDGET'
};


export const WidgetSchema = new SimpleSchema({

	ownerId : {
		type : String,
		optional : false
	},

	sectionId : {
		type : String,
		optional : false
	},

	index : {
		type : Number,
		optional : false
	},

	type : {
		type : String,
		optional : false,
		allowedValues : Object.keys(WidgetTypes).map(function (key) {return WidgetTypes[key]})
	},

	content : {
		type : String,
		optional : true
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
	}


});

Widgets.attachSchema(WidgetSchema);
