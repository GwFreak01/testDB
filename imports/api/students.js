/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Mongo} from 'meteor/mongo';

const Students = new Mongo.Collection('students');

export default Students;

Students.allow({
    insert() {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
    update() {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
    remove() {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    }
});

Students.deny({
    insert() {
        if (Meteor.user()) {
            return false;
        } else {
            return true;
        }
    },
    update() {
        if (Meteor.user()) {
            return false;
        } else {
            return true;
        }
    },
    remove() {
        if (Meteor.user()) {
            return false;
        } else {
            return true;
        }
    }
});

if (Meteor.isServer) {
    Meteor.publish('allStudents', function () {
        return Students.find({});
    });
}