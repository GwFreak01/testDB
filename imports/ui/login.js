/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Template} from 'meteor/templating';

import './login.html';
// import '../../client/libs/routes.js';

Template.login.onCreated(function () {
    console.log("login Template Loaded");
    this.state = new ReactiveDict();
    Meteor.subscribe('allItems');
    Meteor.subscribe('allStudents');

});

Template.login.events({
    'submit .loginForm'(event) {
        event.preventDefault();
        // FlowRouter.go('/register');
        console.log("loginForm Submit");
        var usernameVar = event.target.username.value;
        var passwordVar = event.target.password.value;
        console.log(usernameVar, passwordVar);

        // Meteor.loginWithPassword("jwalk666@gmail.com", "none", function (error) {
        //     if (error) {
        //         console.log(error.reason);
        //     }
        // });
        Meteor.call('confirmLogin', usernameVar, passwordVar);

    },

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