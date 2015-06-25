'use strict';

var rbush = require('rbush'),
	knn = require('./');

var N = 200000,
	M = 20000,
	K = 5;

var points = [];
for (var i = 0; i < N; i++) {
	points.push(randPoint());
}

console.time('load ' + N + ' points');
var tree = rbush().load(points);
console.timeEnd('load ' + N + ' points');

console.time('knn query ' + K + ' neighbors x ' + M);
for (i = 0; i < M; i++) {
	knn(tree, randPoint(), K);
}
console.timeEnd('knn query ' + K + ' neighbors x ' + M);


console.time('bbox query x ' + M);
for (i = 0; i < M; i++) {
	tree.search(randPoint());
}
console.timeEnd('bbox query x ' + M);

function randPoint() {
	var x = Math.floor(Math.random() * 100000),
		y = Math.floor(Math.random() * 100000);
	return [x, y, x, y];
}
