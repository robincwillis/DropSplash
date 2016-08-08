import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Widgets } from './widgets.js';
import { App } from '../app/app.js';

import { WidgetTypes } from './schema.js';

export const insertWidget = new ValidatedMethod({

	name: 'widget.insert',
	validate : null,
	run({sectionId, type, options}){

		if (!this.userId) {
			throw new Meteor.Error('app.initialize.notLoggedIn',
				'Must be logged in to start the app.');
		}

		const widgetDefaults = {

		};

		var widget = {};

		widget.ownerId = this.userId;
		widget.sectionId = sectionId;
		//TODO check if widget was inserted a specific index
		widget.index = Widgets.find(sectionId).count();
		widget.type = WidgetTypes[type];

		widget.settings = options && options.settings ? options.settings : {};
		//get styles
		widget.styles = options  && options.styles ? options.styles : {};

		Object.assign(widget, widgetDefaults);
		Object.assign(widget, options);

		console.log(widget);

		return Widgets.insert(widget);

	}

});

export const updateWidget = new ValidatedMethod({
	name : 'widget.update',
	validate : null,
	run({widgetId, widgetAttributes}) {
		return Widgets.update(widgetId, {
			$set: widgetAttributes
		});
	}
});

export const updateWidgetContent = new ValidatedMethod({
	name : 'widget.update.content',
	validate : null,
	run({widgetId, content}){
		return Widgets.update(widgetId, {
			$set: {content : content}
		});
	}
});

export const removeWidget = new ValidatedMethod({

	name: 'widget.remove',
	validate : null,
	run({ widgetId }){
		const widget = Widgets.findOne(widgetId);
		Widgets.remove(widgetId);
	}
});

//update widget styles
//update widget settings
//move widget
//resort section widgets



