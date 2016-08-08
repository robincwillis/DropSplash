
import { App } from '../app.js';

Meteor.publish('app', function appPublication() {

	if (!this.userId) {
    this.ready();
		return;
  }

	return App.find({
		userId : this.userId
	});

});
