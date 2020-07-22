const expect = require('chai').expect;

const getRandom = require('./index');

describe('getRandom', () => {
    it('should generate a random number', () => {
        expect(getRandom(1000,100)).to.be.greaterThan(100).and.to.be.lessThan(1000);
    })
})