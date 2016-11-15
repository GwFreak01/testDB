/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

import Items from './items';
import Students from './students';

Meteor.methods({
    createNewItem(itemOne, itemTwo) {
        console.log(itemOne, itemTwo);

        check(itemOne, String);
        check(itemTwo, String);
        Items.insert({
            itemOne: {
                text: itemOne,
                value: 0
            },
            itemTwo: {
                text: itemTwo,
                value: 0
            }
        });

    },
    voteOnItem(which, id) {
        check(which, String);
        check(id, String);
        let date = new Date();

        if (which === 'itemOne') {
            Items.update(id, {
                $inc: {'itemOne.value': 1},
                $set: {lastUpdated: date}
            });
        } else {
            Items.update(id, {
                $inc: {'itemTwo.value': 1},
                $set: {lastUpdated: date}
            });
        }

    },
    confirmLogin(username, password) {
        console.log("confirmLogin");
        check(username, String);
        check(password, String);

        // Meteor.loginWithPassword("jwalk666@gmail.com", "none", function (error) {
        //     if (error) {
        //         alert(error.reason);
        //     }
        // });
        // console.log(Students.findOne({email: username}).fetch());


        // console.log(Meteor.users.find({}).fetch());

        // console.log(Students.findOne({email: username}).password);


        // console.log(Students.findOne({email: username}));
        // console.log(Students.findOne({email: username}).password);

        if (Students.findOne({email: username})) {
            if (Students.findOne({email: username}).password == password) {
                FlowRouter.go('/home');
            } else {
                alert('INCORRECT PASSWORD');
            }
        } else {
            alert('No USERNAME');
        }



    },
    registerButton(username, password) {
        console.log("registerButton START");
        check(username, String);
        check(password, String);


        // Accounts.findUserByUsername(event.target.username.value);
        // console.log("Initializing Account Creation");
        // console.log(event.target.username.value);
        // console.log(event.target.password.value);
        Accounts.createUser({
            username: username,
            password: password
        });
        console.log(Meteor.users.findOne({}));

        // event.target.username.value = '';
        // event.target.password = '';
        // console.log("Successful Account Creation");
        // console.log(Meteor.users().find({}));
    }

});