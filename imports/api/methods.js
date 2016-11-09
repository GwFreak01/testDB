/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


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

        if(which === 'itemOne') {
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

    }

});