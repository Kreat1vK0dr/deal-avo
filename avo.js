var string = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";

var map = {};
var dealsavg = [];

var deals = string.replace('0.','0').split(', ').join(',').split(',');
for (var i = 0 ; i<deals.length; i++) {
  var deal = deals[i].replace(' for ','').split('R').reduce(function(a,b){return Number((Number(b)/Number(a)).toFixed(2));});
  map['Deal'+(i+1)] = {'avg': 'R'+deal+' per avo', 'deal': deals[i] };
  dealsavg.push(deal);
}

exports.perAvoDeal = function() {
  return map;
};

exports.min = function() {
  return dealsavg.reduce(function(a,b) {return a < b ? a : b;});
};

exports.max = function() {
  return dealsavg.reduce(function(a,b) {return a > b ? a : b;});
};
