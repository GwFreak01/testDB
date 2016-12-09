/**
 * Created by GWFreak01 on 11/6/16.
 */
import { Meteor } from 'meteor/meteor';
import {Template} from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';


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
        // console.log("loginForm Submit");
        var usernameVar = event.target.username.value;
        var passwordVar = event.target.password.value;
        // console.log(usernameVar, passwordVar);

        Meteor.loginWithPassword(usernameVar, passwordVar, function (error) {
            if (error) {
                console.log(error.reason);
                console.log(error.message);

            } else {
                FlowRouter.go('/home');
                console.log("BLOOD MAGIC");
            }
        });


        // Meteor.call('confirmLogin', usernameVar, passwordVar);

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
if (Meteor.isServer) {
    // var myMsg = "Incorrect Login1";
    // Accounts.validateLoginAttempt(function(attempt){
    //     if (attempt.error){
    //         var reason = attempt.error.reason;
    //         if (reason === "User not found" || reason === "Incorrect password")
    //             throw new Meteor.Error(403, myMsg);
    //     }
    //     return attempt.allowed;
    // });

    // AccountsTemplates.configure({
        // forbidClientAccountCreation:false,
        // overrideLoginErrors:true,
        // negativeValidation: true,
        // positiveValidation: true,
        // showValidating:true,
        // onSubmitHook:submitForm,
        // homeRoutePath:'/camera',
    // });
}
