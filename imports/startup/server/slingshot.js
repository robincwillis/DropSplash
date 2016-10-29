import { Random } from 'meteor/random';
import { Pages } from '../../api/pages/pages.js';

Slingshot.createDirective("imageUpload", Slingshot.S3Storage, {
	bucket: Meteor.settings.AWSBucketName,
	acl: "public-read",
	authorize: function () {
		//Deny uploads if user is not logged in.
		if (!this.userId) {
			var message = "Please login before posting files";
			throw new Meteor.Error("Login Required", message);
		}
		return true;
	},

	key: function (file) {
		let pages = Pages.find().fetch();
		let extension = file.name.split('.').pop();
		return this.userId + '/' + pages[0]._id + '/' + file.name + Random.id() + '.' + extension;
	}
});

