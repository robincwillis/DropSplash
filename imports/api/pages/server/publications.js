
import { Pages } from '../pages.js';

Meteor.publish('pages', function pagesPublication() {
	if (!this.userId) {
    this.ready();
		return;
  }

	return Pages.find({
		ownerId : this.userId
	});
});
