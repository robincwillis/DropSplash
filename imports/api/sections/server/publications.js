
import { Sections } from '../sections.js';

Meteor.publish('sections', function sectionsPublication() {
	if (!this.userId) {
    this.ready();
		return;
  }

	return Sections.find({
		ownerId : this.userId
	});
});


Meteor.publish('sections.inPage', function sectionsInPagePublication(pageId) {
	if (!this.userId) {
		this.ready();
		return;
	}

	console.log(pageId);

	return Sections.find({
		ownerId : this.userId,
		pageId : pageId
	});


});