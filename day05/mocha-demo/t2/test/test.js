/**
 * Created by web-01 on 2017/11/16.
 */

var expect = require('chai').expect;

describe('Class A ',function(){
    it('equal',function(){
        expect(1+1).to.be.equal(2);
    });
    it(' no equal',function(){
        expect(1-1).to.be.not.equal(1);
    });

});
describe("Class B",function(){
    it('true',function(){
        expect(1).to.be.ok;
    });
    it('false',function(){
        expect(0).to.be.not.ok;
    })
});
describe("Class B",function(){
    it('type of string',function(){
        expect('test...').to.be.a('string');
    });
    it('type of object',function(){
        expect({}).to.be.an('object');
    })
});
describe("Class D",function(){
    it('include',function(){
        expect([1,2,3]).to.be.include(1);
    });
    it('contain',function(){
        expect('hello world').to.be.contain('hell');
    });
    it('include',function(){
        expect({k1:'v1',k2:'v2'}).to.be.include.keys('k1')
    })
})