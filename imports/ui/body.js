/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Template} from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Session} from 'meteor/session';

import Items from '../api/items.js';

import './body.html';
import './item.js';
// import './login.js';

import './register.html';

Template.body.onCreated(function () {
    this.state = new ReactiveDict();
    Meteor.subscribe('allItems');
});

Template.body.helpers({
    items() {
        return Items.find({}, {
            limit: 1,
            sort: {lastUpdated: 1}
        });
    },
    loggedIn() {
        return Meteor.userId();
    },
    showForm() {
        const instance = Template.instance();
        return instance.state.get('showForm');
    },
    bgColor() {
        return Session.get('bgColor');
    }
});

Template.body.events({
    'click .showForm'(event, instance) {
        Session.set('bgColor', 'green');
        instance.state.set('showForm', true);
    },

    'submit .new-items'(event, instance) {
        event.preventDefault();
        Meteor.call('createNewItem', event.target.item1.value, event.target.item2.value, (err, res)=> {
            if (err) {
                console.log(err);
            } else {
                instance.state.set('showForm', false);
                event.target.item1.value = '';
                event.target.item2.value = '';
            }
        });


    }
});