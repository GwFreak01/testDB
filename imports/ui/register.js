/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Template} from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './register.html';

Template.register.helpers({

});

Template.register.events({
    'submit .login'(event) {
        event.preventDefault();
        console.log("Initializing Account Creation");
        Accounts.createUser({
            username: event.target.username.value,
            password: event.target.password
        });
        event.target.username.value = '';
        event.target.password = '';
        console.log("Successful Account Creation");
    }
});

