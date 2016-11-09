/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Template} from 'meteor/templating';

import './item.html';

import Items from '../api/items.js';


Template.item.events({
    'click .vote-one'(event) {
        Meteor.call('voteOnItem', 'itemOne', this._id);
    },
    'click .vote-two'(event) {
        Meteor.call('voteOnItem', 'itemTwo', this._id);
    }
});