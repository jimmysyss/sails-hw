var sails = require('sails');
var Barrels = require('barrels');
require('should');

before(function (done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
    // configuration for testing purposes
    log: {
      level: 'error'
    },
    models: {
      connection: 'test',
      migrate: 'drop'
    }
  }, function (err, sails) {
    if (err) return done(err);

    // Load fixtures
    var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    fixtures = barrels.data;

    // Populate the DB
    barrels.populate(function(err) {
      done(err, sails);
    });
  });
});

after(function (done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
