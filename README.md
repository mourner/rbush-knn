## rbush-knn

_k_-nearest neighbors search for [RBush](https://github.com/mourner/rbush).
Implements a simple depth-first kNN search algorithm using a priority queue.

```js
var knn = require('rbush-knn');

var tree = rbush().load(data); // create an RBush index
var neighbors = knn(tree, [40, 40], 10); // return 10 nearest items around point [40, 40]
```
