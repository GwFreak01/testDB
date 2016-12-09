/**
 * Created by GWFreak01 on 11/14/16.
 */
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

// import '../../public/images/EagerLogo.png';
import './home.html';
import './home.css';

Template.home.onCreated(function () {
    console.log("login Template Loaded");
    this.state = new ReactiveDict();
    Meteor.subscribe('allItems');
    Meteor.subscribe('allStudents');

});

Template.home.helpers({
    dateVar: function () {
        var weekDay = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
        var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
            "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        var today = new Date();
        var day = weekDay[today.getDay()];
        var month = monthNames[today.getMonth()];

        var date = day + " " + month + " " + today.getDate() + ", " + today.getFullYear();
        return date;
    },

    studentName: function () {
        
    }

});