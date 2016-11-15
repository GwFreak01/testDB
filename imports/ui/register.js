/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Template} from 'meteor/templating';


import './register.html';

Template.register.helpers({

});

Template.register.events({
    'submit .login'(event) {
        event.preventDefault();
        console.log("Creating Account");
        Accounts.createUser({
            username: event.target.username.value,
            password: event.target.password.value
        }, function (error) {
            if (error) {
                console.log(error.message);
            }
        });
        // Meteor.call('registerButton', event.target.username.value, event.target.password.value);

    }
});

