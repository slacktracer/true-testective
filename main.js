'use strict';
var
    expect,
    request;
expect = require('expect.js');
request = require('superagent');
describe('Suite one', function () {
    it('should test something', function (done) {
        request.post('localhost:8080').end(function (res) {
            expect(resr).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body).to.contain('world');
            done();
        });
    });
});
