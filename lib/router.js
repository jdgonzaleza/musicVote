// Router.configure({
//   layoutTemplate: 'applicationLayout'
// });

// Router.plugin('ensureSignedIn', {
//   except: ['homepage', 'atSignIn', 'atSignUp', 'atForgotPassword']
// });

// Router.route('/', {
//   name: 'homepage',
//   onBeforeAction: function() {
//     if (Meteor.user()) this.redirect('/spotify');
//     else this.next();
//   }
// });

// Router.route('/spotify', {
//   name: 'spotify'
// });
Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('/',function(){
		this.render('search');
	});
});
