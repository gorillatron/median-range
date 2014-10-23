var expect = require("expect.js")
var medianrange = require('../src/medianrange')

describe('medianrange', function() {

  it('should create a range starting at median 10 with 3 element', function() {
    expect( medianrange(10, 3) ).to.eql( [9,10,11] )
  })

  it('should respec upper and lower bounds even if that means the range will be shorter than the desired size', function(){
    expect( medianrange(10, 7, 9, 12) ).to.eql( [9,10,11,12] )
  })

  it('should create a range starting at median 10 with 7 elements the lowest beeing 9', function() {
    expect( medianrange(10, 7, 9) ).to.eql( [9,10,11,12,13,14,15] )
  })

  it('should create a range starting at median 10 with 7 elements the highest beeing 12', function() {
    expect( medianrange(10, 7, -Infinity, 12) ).to.eql( [6,7,8,9,10,11,12] )
  })


})
