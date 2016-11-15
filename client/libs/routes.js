/**
 * Created by GWFreak01 on 11/6/16.
 */
// import {FlowRouter} from 'meteor/kadira:flow-router';
// import '../../public/images/';
import '../../imports/ui/register.js';
import '../../imports/ui/login.js';
import '../../imports/ui/home.js';


// import '../../imports/ui/app_body.html';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('login');
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('register');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('home');
    }
});