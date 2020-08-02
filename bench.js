import RBush from 'rbush';
import knn from './index';

var N = 200000,
    M = 20000,
    K = 5;

var points = [];
var queries = [];
for (var i = 0; i < N; i++) {
    points.push(randPoint());
    queries.push(randPoint());
}

console.time('load ' + N + ' points');
var tree = new RBush().load(points);
console.timeEnd('load ' + N + ' points');

console.time('knn query ' + K + ' neighbors x ' + M);
for (i = 0; i < M; i++) {
    knn(tree, queries[i].minX, queries[i].minY, K);
}
console.timeEnd('knn query ' + K + ' neighbors x ' + M);


console.time('bbox query x ' + M);
for (i = 0; i < M; i++) {
    tree.search(queries[i]);
}
console.timeEnd('bbox query x ' + M);

function randPoint() {
    var x = Math.floor(Math.random() * 100000),
        y = Math.floor(Math.random() * 100000);
    return {
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
    };
}
