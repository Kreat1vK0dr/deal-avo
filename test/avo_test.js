var avo = require('../avo');
var assert = require('assert');

describe('avo', function() {

  it('should return a map with deals and their avg price per avo', function() {
    var result = avo.perAvoDeal();
    assert.deepEqual(result,  {
                                'Deal1': {
                                  'avg': "R3 per avo",
                                  'deal': "1 for R3"
                                },
                                'Deal2': {
                                  'avg': "R3.5 per avo",
                                  'deal': "2 for R7"
                                },
                                'Deal3': {
                                  'avg': "R3.33 per avo",
                                  'deal': "3 for R10"
                                },
                              'Deal4': {
                                  'avg': "R2.9 per avo",
                                  'deal': "5 for R14.50"
                                }
                    });
  });

  it('should return least expensive deal and its price per avo', function() {
    var result = avo.min();
    assert.equal(result, 2.9);
  });

  it('should return most expensive deal and its price per avo', function() {
    var result = avo.max();
    assert.equal(result, 3.5);
  });


});
