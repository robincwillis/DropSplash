import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const getMedia = new ValidatedMethod({
	name: 'instagram.getMedia',
 	mixins: [CallPromiseMixin],
	validate : null,
	run() {
		var response = 'foo';
		if (!this.isSimulation) {
			console.log(InstagramAPI);
			response = InstagramAPI.getMedia().then( ( response ) => {

				console.log( response );

			}).catch( ( error ) => {

				console.warn( error );

			});

		}
		return response;
	}
});