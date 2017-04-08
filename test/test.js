var expect = require('chai').expect;
var index = require('../index');

describe('#index', function() {
    it('simple test', function() {
        var result = index.myFunc1();
        expect(result).to.equal(1);
    });
});