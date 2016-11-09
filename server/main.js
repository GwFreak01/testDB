import { Meteor } from 'meteor/meteor';
import '../imports/api/items.js';

import {Students} from '../imports/api/items.js';

Meteor.startup(() => {
  // code to run on server at startup
  //   Students.insert
});
