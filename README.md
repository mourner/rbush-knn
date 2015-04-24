K Nearest Neighbors search for [RBush](https://github.com/mourner/rbush).
Implements a simple depth-first kNN search algorithm using a priority queue.

Example usage:

```js
var knn = require('rbush-knn');

var tree = rbush().load(data);

// return 10 nearest items around point [40, 40]
var neighbors = knn(tree, [40, 40], 10);
```
