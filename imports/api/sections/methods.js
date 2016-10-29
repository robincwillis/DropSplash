import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Sections } from './sections.js';
import { App } from '../app/app.js';



export const insertSection = new ValidatedMethod({

	name: 'section.insert',
	validate : null,
	run({pageId, options}) {

		//TODO probably better to put this in validate, or some mixin
		if (!this.userId) {
			throw new Meteor.Error('app.initialize.notLoggedIn',
				'Must be logged in to start the app.');
		}



		var app = App.findOne({userId : this.userId});

		const sectionDefaults = {

		};

		var section = {};

		section.ownerId = this.userId;
		section.pageId = pageId;
		section.index = Sections.find().count();

		section.settings = options && options.settings ? options.settings : app.defaultSectionSettings;
		//get styles
		section.styles = options  && options.styles ? options.styles : app.defaultSectionStyles;
		//get container styles
		section.containerStyles = options && options.containerStyles ? options.containerStyles : app.defaultContainerStyles;

		//get sectionDefaults
		Object.assign(section, sectionDefaults);
		//get section options
		Object.assign(section, options ? options : {});

		return Sections.insert(section);

	}
});

export const removeSection = new ValidatedMethod({
	name: 'section.remove',
	validate : null,
	run({ sectionId }){
		const section = Sections.findOne(sectionId);
		Sections.remove(sectionId);
	}
});

export const updateSectionSettings = new ValidatedMethod({
	name: 'section.update.settings',
	validate : null,
	run({sectionId, settings}) {
		return Sections.update(sectionId, {
			$set: {settings : settings}
		});
	}

});

// export const updateSectionStyles = new ValidatedMethod({

// });

// export const remove = new ValidatedMethod({

// });

//TODO : update
//TODO : upsert
//TODO : delete
//TODO : reset
