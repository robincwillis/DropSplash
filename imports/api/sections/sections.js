import { Mongo } from 'meteor/mongo';

import { Widgets } from '../widgets/widgets.js';

export const Sections = new Mongo.Collection('sections');

Sections.helpers({
  widgets() {
    return Widgets.find({ sectionId: this._id }, { sort: { index: 1 } });
  }
});
