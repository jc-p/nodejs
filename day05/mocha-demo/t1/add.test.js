var add=require('./add');

var expect = require('chai').expect;
// console.log(add(1,1));

describe('A add() function Test',function(){
    it('1+1=2',function(){
        expect(add(1,1)).to.be.equal(2);
    })
});

