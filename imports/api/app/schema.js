import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { App } from './app.js';

export const AppSchema = new SimpleSchema({

	userId : {
		type : String,
		optional : false,
		unique : true
	},

	settings : {
		type : Object,
		blackbox: true,
		optional:true
	},

	defaultPageStyles : {
		type : Object,
		blackbox: true,
		defaultValue: {}
	},

	defaultPageSettings : {
		type : Object,
		blackbox: true,
		defaultValue: {}
	},

	defaultSectionSettings : {
		type : Object,
		blackbox: true,
		defaultValue : {
			overlayColor : '#00000',
			overlayOpacity : 0.3,
			alignment : 'center',
			verticalAlignment : 'top'
		}
	},

	defaultSectionStyles : {
		type : Object,
		blackbox: true,
		defaultValue : {
			color :  '#000000',
			opacity : 1,
			backgroundColor : '#ffffff'
		}
	},

	defaultContainerStyles : {
		type : Object,
		blackbox: true,
		defaultValue : {
			maxWidth : 600
		}
	}

});

App.attachSchema( AppSchema );
