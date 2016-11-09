/**
 * Created by GWFreak01 on 11/6/16.
 */
// import {FlowRouter} from 'meteor/kadira:flow-router';
import '../../imports/ui/register.html';
import '../../imports/ui/login.html';
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