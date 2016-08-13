

Meteor.publish('user.services', function userServicesPublication() {

	if (!this.userId) {
		this.ready();
		return;
	}

	return  Meteor.users.find({_id:this.userId},
			{fields: {
				'services.facebook.id':1,
				'services.instagram.id':1
			}

	});

});