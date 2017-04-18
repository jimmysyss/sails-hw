var request = require('supertest');

describe('MessageController', function () {

  describe('#index()', function () {
    it('should return with no error', function (done) {
      request(sails.hooks.http.app)
        .get('/message')
        .expect(200, done);
    });
  });

});
