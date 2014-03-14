'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Genre = mongoose.model('Genre'),
  Dialog = mongoose.model('Dialog');

/**
 * Populate database with sample application data
 */


// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});


//Clear old users, then add a default user
Genre.find({}).remove(function() {
	Genre.create({
    type: 'Comedy'
  },{
	  type: 'Romance'
  },{
	  type: 'Action'
  }, function() {
      console.log('finished populating genres');
    }
  );
});

//create some sample dialogs
Dialog.find({}).remove(function() {
	Dialog.create({
		text: 'താമരശേരി ചോരം',
		movie: 'വെള്ളാനകളുടെ നാട്',
		genre: {type:'Comedy'}
  },{
	  text: 'അയാം ',
	  movie:' മഴ പെയ്യുന്നു മദ്ദളം കൊട്ടുന്നു',
	  genre: {type:'Comedy'}
  }, function() {
      console.log('finished populating dialogues');
    }
  );
});
