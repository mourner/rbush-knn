## rbush-knn

_k_-nearest neighbors search for [RBush](https://github.com/mourner/rbush).
Implements a simple depth-first kNN search algorithm using a priority queue.

```js
var knn = require('rbush-knn');

var tree = rbush().load(data); // create an RBush index
var neighbors = knn(tree, [40, 40], 10); // return 10 nearest items around point [40, 40]
```

You can optionally pass a filter function to find k neighbors that satisfy a certain condition:

```js
var neighbors = knn(tree, [40, 40], 10, function (item) {
    return item.foo === 'bar';
});
```

### Changelog

##### 1.1.0 (Feb 29, 2015)

- Add an optional filter function argument.

##### 1.0.2 (Jun 25, 2015)

- 2.5x performance improvement!

##### 1.0.1 (Jun 10, 2015)

- Fixed an error when requesting more items than the tree has. #1

##### 1.0.0 (Apr 24, 2015)

- Initial release.
