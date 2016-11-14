/**
 * Created by GWFreak01 on 11/6/16.
 */
import {Mongo} from 'meteor/mongo';
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

if (Meteor.isServer) {
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
        }

    });
}