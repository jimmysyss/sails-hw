/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    return res.send('HELLO WORLD');
  },

  bye: function (req, res) {
    return res.redirect('http://www.yahoo.com.hk');
  },

  index: function (req, res) {
    Message.find().exec(function(err, rows) {
      if (err) {
        res.json({"error": true, "message": "database error"});
      } else {
        res.ok(rows);
      }
    });
  },

  status: function(req, res) {
    var name = req.param('name');
    var message = req.param('message');
    Message.create({email: name, message: message}).exec(function(err, rows) {
      if (err) {
        sails.log(err)
      } else {
        Message.publishCreate(rows);
      }
    });
  },

  subscribe: function(req, res) {
    Message.watch(req);
  }

};

