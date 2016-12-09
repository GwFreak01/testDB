/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Meteor} from 'meteor/meteor';

import {Template} from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './register.css';
import './register.html';
import Students from '../api/students.js';

Template.register.helpers({

});

Template.register.events({
    'submit .login'(event) {
        event.preventDefault();
        // console.log("Creating Account");
        // Accounts.createUser({
        //     username: event.target.username.value,
        //     password: event.target.password.value
        // }, function (error) {
        //     if (error) {
        //         console.log(error.message);
        //     } else {
        //         console.log(error);
        //     }
        // });
        Meteor.call('registerButton', event.target.username.value, event.target.password.value);


    }
});

