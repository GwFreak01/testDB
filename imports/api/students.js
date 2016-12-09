/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Mongo} from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';

import {Meteor} from 'meteor/meteor';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import './methods.js';


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

Students.schema = new SimpleSchema({
    // _id: { //Unique student/user identifier within the system (Persistance of account between schools)
    //     type: String,
    //     regEx: SimpleSchema.RegEx.Id,
    //     denyUpdate: true,
    // },
    // studentId: { //Unique student identifier relative to the school
    //     type: String,
    //     // regEx: SimpleSchema.RegEx.Id,
    //     label: "School defined student ID",
    //     denyUpdate: false,
    // },
    // schoolId: { //Unique school identifier the student associated with
    //     type: String,
    //     // regEx: SimpleSchema.RegEx.Id,
    //     denyUpdate: false,
    // },
    firstName: {
        type: String,
        label: "First name",
        max: 25,
    },
    lastName: {
        type: String,
        label: "Last name",
        max: 35,
    },
    password: {
        type: String,
        max: 30,
        //Encryption / Hashing ??
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        max: 50,
    },
    points: {
        type: Number,
        label: "Current number of acquired points",
        defaultValue: 0,
    },
    // courseSchedule: {       //Courses a student is currently enrolled in; cleared when course complete
    //     type: [Courses]
    // }
    // courseSchedule: {type: [],}
});

// Students.attachSchema(Students.schema);

if (Meteor.isServer) {
    var myMsg = "Incorrect Login";
    Accounts.validateLoginAttempt(function(attempt){
        if (attempt.error){
            var reason = attempt.error.reason;
            if (reason === "User not found" || reason === "Incorrect password")
                throw new Meteor.Error(403, myMsg);
        }
        return attempt.allowed;
    });

    Meteor.publish('allStudents', function () {
        return Students.find({});
    });
    Meteor.startup(() => {
        // code to run on server at startup
        let studentExample = {
            // _id: "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd",
            studentId: "007",
            // schoolId: "5de5b455-18e7-c3a5-24c5-a6bde9a203f8",
            firstname: "Johnnie",
            lastname: "Walkington",
            password: "none",
            email: "jwalk666@gmail.com",
            points: "243",
            courseSchedule: [
                {
                    // _id: "d979c77d-0408-827d-153b-b6bf656e6d40",
                    courseName: "Calculus I",
                    courseId: "MATH-201",
                    teacher: [
                        "4cb295fe-e516-4a8b-4abd-94e5da43856c"
                    ],
                    students: [
                        "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd"
                    ],
                    assignments: [
                        "d979c77d-0408-827d-153b-b6bf656e6d40"
                    ]
                }
            ]
        };

        if (!Students.findOne()) {
            Students.insert(studentExample);
            Accounts.createUser({
                username: studentExample.email,
                password: studentExample.password
            }, function (error) {
                if (error) {
                    console.log(error.message);
                }
            });
        }

    });
}