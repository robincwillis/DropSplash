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
		widget.index = Widgets.find({sectionId:sectionId}).count();

		widget.type = WidgetTypes[type];

		widget.settings = options && options.settings ? options.settings : {};
		//get styles
		widget.styles = options  && options.styles ? options.styles : {};

		Object.assign(widget, widgetDefaults);
		Object.assign(widget, options);

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

export const updateWidgetSettings = new ValidatedMethod({
	name : 'widget.update.settings',
	validate : null,
	run({widgetId, settings}){
		return Widgets.update(widgetId, {
			$set: {settings : settings}
		});
	}
});

export const updateWidgetStyles = new ValidatedMethod({
	name : 'widget.update.styles',
	validate : null,
	run({widgetId, styles}){
		return Widgets.update(widgetId, {
			$set: {styles : styles}
		});

		//TODO update default styles
	}
});

export const updateWidgetOrder = new ValidatedMethod({
	name: 'widget.update.order',
	validate : null,
	run({widgets}) {
		widgets.forEach( (widget)=> {
      Widgets.update( { _id: widget._id }, { $set: { index: widget.index } } );
		});
	}
});

export const removeWidget = new ValidatedMethod({

	name: 'widget.remove',
	validate : null,
	run({ widgetId }){
		const widget = Widgets.findOne(widgetId);
		const sectionId = widget.sectionId;
		Widgets.remove(widgetId);
		let widgets = Widgets.find({sectionId : sectionId}, {sort : {index : 1}}).fetch();
		let sortedWidgets = widgets.map( (widget, index)=> {
			widget.index = index;
			return widget;
		});
		updateWidgetOrder.call({widgets: sortedWidgets});
	}
});

export const insertWidgetAfter = new ValidatedMethod({
	name : 'widget.insert.after',
	validate : null,
	run({sectionId, type, options, index}){
		let widgetId = insertWidget.call({
			sectionId : sectionId,
			type: type,
			options: options
		}, (err, res) => {

			let widgets = Widgets.find({sectionId :sectionId}, {sort : {index : 1}}).fetch();
			let insertedWidget = widgets.find( (widget) => { return widget._id === res;});
			widgets.splice(insertedWidget.index, 1);
			widgets.splice(index, 0, insertedWidget);
			let sortedWidgets = widgets.map( (widget, i)=> {
				widget.index = i;
				return widget;
			});
			updateWidgetOrder.call({widgets: sortedWidgets});
		});
		return widgetId;
	}
});
