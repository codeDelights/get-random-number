const expect = require('chai').expect;

const getRandom = require('./index');

describe('getRandom', () => {
    it('should generate a random number', () => {
        expect(getRandom()).to.be.greaterThan(1).and.to.be.lessThan(10);
    })
})