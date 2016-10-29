
import { Widgets } from '../widgets.js';

Meteor.publish('widgets', function widgetsPublication() {
	if (!this.userId) {
		this.ready();
		return;
	}

	return Widgets.find({
		ownerId : this.userId
	});
});

Meteor.publish('widgets.inSection', function widgetsInSectionPublication(sectionId) {
	if (!this.userId) {
		this.ready();
		return;
	}

	return Widgets.find({
		ownerId : this.userId,
		sectionId : sectionId
	}, { sort: { index: 1 } });


});