var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function (req, res) {

    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function (err) {
        if (err) res.send(err);
        return res.send({
          message: info.message,
          user: user
        });
      });

    })(req, res);
  },

  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  },

  fbLogin: function(req, res) {
    passport.authenticate('facebook', {scope: ['email', 'user_about_me']}, function (err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function (err) {
        if (err) res.send(err);
        return res.send({
          message: info.message,
          user: user
        });
      });

    })(req, res);
  },

  fbLoginCb: function(req, res) {
    passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }, function (err, user, info) {
      sails.log.info("**************");
      sails.log.info(user);
      sails.log.info(info);
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function (err) {
        if (err) res.send(err);
        return res.send({
          message: info.message,
          user: user
        });
      });
    })(req, res);

    //res.redirect('/');
  }
};
