import { Mongo } from 'meteor/mongo';

import { Sections } from '../sections/sections.js';


export const Pages = new Mongo.Collection('pages');

Pages.helpers({
  sections() {
    return Sections.find({ pageId: this._id }, { sort: { index: 1 } });
  }
});
