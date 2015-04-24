'use strict';

var Queue = require('tinyqueue');

module.exports = knn;

function knn(tree, queryPoint, n) {
    var node = tree.data,
        result = [],
        toBBox = tree.toBBox,
        i, len, child;

    var queue = new Queue(function (a, b) {
        var box1 = a.children ? a : toBBox(a),
            box2 = b.children ? b : toBBox(b);
        return boxDist(queryPoint, box1) - boxDist(queryPoint, box2);
    });

    while (node) {
        for (i = 0, len = node.children.length; i < len; i++) {
            child = node.children[i];
            queue.push(child);
        }

        while (!queue.peek().children && result.length < n) result.push(queue.pop());
        if (result.length === n) break;

        node = queue.pop();
    }

    return result;
}

function boxDist(p, box) {
    var dx = axisDist(p[0], box[0], box[2]),
        dy = axisDist(p[1], box[1], box[3]);
    return dx * dx + dy * dy;
}

function axisDist(k, min, max) {
    return k < min ? min - k :
           k <= max ? 0 :
           k - max;
}
