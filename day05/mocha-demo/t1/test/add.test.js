var add=require('../add');
var sub = require('../sub');

var expect = require('chai').expect;
// console.log(add(1,1));

describe('A add() function Test',function(){
    it('1+3=4',function(){
        expect(add(1,3)).to.be.equal(4);//一条断言 =》一次判断

    });
    it('1+4=5',function(){
        expect(add(1,4)).to.be.equal(5);

    });
});
describe("A sub() Function Test ",function(){
    it('1-1=0',function(){
        expect(sub(1,1)).to.be.equal(0);
    })
})

