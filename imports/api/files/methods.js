import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Files } from './files.js';

export const insertFile = new ValidatedMethod({
	name: 'file.insert',
	validate: null,
	run({file}) {
		return Files.insert(file);
	}
});

export const removeFile = new ValidatedMethod({
	name: 'file.remove',
	validate : null,
	run({fileId}) {
		Files.remove(fileId);
	}
});

