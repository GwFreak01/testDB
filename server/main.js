import { Meteor } from 'meteor/meteor';
import '../imports/api/items.js';
import { Accounts } from 'meteor/accounts-base';


// import '../imports/api/students.js';

Meteor.startup(() => {
    console.log("SERVER STARTUP");

  // code to run on server at startup
  //   let studentExample = {
  //       // _id: "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd",
  //       studentId: "007",
  //       // schoolId: "5de5b455-18e7-c3a5-24c5-a6bde9a203f8",
  //       firstname: "Johnnie",
  //       lastname: "Walkington",
  //       password: "none",
  //       email: "jwalk666@gmail.com",
  //       points: "243",
  //       courseSchedule: [
  //           {
  //               // _id: "d979c77d-0408-827d-153b-b6bf656e6d40",
  //               courseName: "Calculus I",
  //               courseId: "MATH-201",
  //               teacher: [
  //                   "4cb295fe-e516-4a8b-4abd-94e5da43856c"
  //               ],
  //               students: [
  //                   "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd"
  //               ],
  //               assignments: [
  //                   "d979c77d-0408-827d-153b-b6bf656e6d40"
  //               ]
  //           }
  //       ]
  //   };
  //
  //   Students.insert(studentExample);
});
