
import { Files } from '../files.js';


Meteor.publish('files', function filesPublication() {
	if (!this.userId) {
		this.ready();
		return;
	}

	return Files.find({
		ownerId : this.userId
	});
});
