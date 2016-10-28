import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const getMedia = new ValidatedMethod({
	name: 'instagram.getMedia',
 	mixins: [CallPromiseMixin],
	validate : null,
	run(options) {
		var response;
		if (!this.isSimulation) {
			response = InstagramAPI.getMedia(options);
		}
		return response;
	}
});