const ig = require('instagram-node').instagram();
const services = Meteor.settings ? Meteor.settings.private.oAuth : null;


InstagramAPI = {
	init : function () {
		ig.use({ access_token: Meteor.user().services.instagram.accessToken });
		//ig.use({ client_id: 'YOUR_CLIENT_ID', client_secret: 'YOUR_CLIENT_SECRET' });
	},

	getMedia : function (options) {
		return new Promise( ( resolve, reject ) => {
			this.init();
			const userId = Meteor.user().services.instagram.id;
			ig.user_media_recent(userId, options, function(err, medias, pagination, remaining, limit) {
				if (err) {
					reject(err);
				} else {
					resolve(medias);
				}
			});
		});
	}
};