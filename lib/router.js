Router.configure({
    layoutTemplate: 'AppLayout'
});

Router.map(function () {
    //Home Route
    this.route('dashboard', {path: '/'});

    //Login Route
    this.route('login');

    //Register and account registration
    this.route('register');

    //Questions Route
    this.route('questions');
});

//Router.onBeforeAction(function () {
//    if  (!Meteor.userId() && !Meteor.loggingIn()) {
//        this.redirect('login');
//        this.stop();
//    } else {
//        this.next();
//    }
//},{except: ['login', 'register'] });