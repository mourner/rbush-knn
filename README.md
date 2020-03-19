## rbush-knn [![Build Status](https://travis-ci.org/mourner/rbush-knn.svg?branch=master)](https://travis-ci.org/mourner/rbush-knn)

_k_-nearest neighbors search for [RBush](https://github.com/mourner/rbush).
Implements a simple depth-first kNN search algorithm using a priority queue.

```js
var RBush = require('rbush');
var knn = require('rbush-knn');

var tree = new RBush(); // create RBush tree
tree.load(data); // bulk insert
var neighbors = knn(tree, 40, 40, 10); // return 10 nearest items around point [40, 40]
```

You can optionally pass a filter function to find k neighbors that satisfy a certain condition:

```js
var neighbors = knn(tree, 40, 40, 10, function (item) {
    return item.foo === 'bar';
});
```

### API

**knn(tree, x, y, [k, filterFn, maxDistance])**

- `tree`: an RBush tree
- `x`, `y`: query coordinates
- `k`: number of neighbors to search for (`Infinity` by default)
- `filterFn`: optional filter function; `k` nearest items where `filterFn(item) === true` will be returned.
- `maxDistance` (optional): maximum distance between neighbors and the query coordinates (`Infinity` by default)

### Changelog

##### 3.0.0 (Mar 19, 2020)

- **Breaking**: fixed `maxDistance` argument — now it's taken into account correctly (rather than being used as a max squared distance). h/t [@AleksandarFaraj](https://github.com/AleksandarFaraj)
- Updated dependencies.

##### 2.0.0 (Jun 30, 2016)

- **Breaking**: updated to be compatible with RBush 2.0.
- **Breaking**: signature changed from `tree, [x, y], k, filterFn` to `tree, x, y, k, filterFn`
- Improved performance by ~20%.

##### 1.1.0 (Feb 29, 2015)

- Add an optional filter function argument.

##### 1.0.2 (Jun 25, 2015)

- 2.5x performance improvement!

##### 1.0.1 (Jun 10, 2015)

- Fixed an error when requesting more items than the tree has. #1

##### 1.0.0 (Apr 24, 2015)

- Initial release.
