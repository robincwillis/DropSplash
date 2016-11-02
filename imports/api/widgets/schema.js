import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Widgets } from './widgets.js';

export const WidgetTypes = {
	HEADLINE_WIDGET : 'HEADLINE_WIDGET',
	PARAGRAPH_WIDGET : 'PARAGRAPH_WIDGET',
	IMAGE_WIDGET : 'IMAGE_WIDGET',
	BUTTON_WIDGET : 'BUTTON_WIDGET',
	VIDEO_WIDGET : 'VIDEO_WIDGET',
	AUDIO_WIDGET : 'AUDIO_WIDGET',
	MAP_WIDGET : 'MAP_WIDGET',
	MEDIUM_WIDGET : 'MEDIUM_WIDGET',
	DIVIDER_WIDGET : 'DIVIDER_WIDGET',
	TWITTER_WIDGET : 'TWITTER_WIDGET',
	INSTAGRAM_WIDGET : 'INSTAGRAM_WIDGET',
	MAILCHIMP_WIDGET : 'MAILCHIMP_WIDGET',
	SLIDESHOW_WIDGET : 'SLIDESHOW_WIDGET',
	GALLERY_WIDGET : 'GALLERY_WIDGET',
	HTML_WIDGET : 'HTML_WIDGET',
	SOCIAL_WIDGET : 'SOCIAL_WIDGET'
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
