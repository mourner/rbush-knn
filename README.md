## rbush-knn

_k_-nearest neighbors search for [RBush](https://github.com/mourner/rbush).
Implements a simple depth-first kNN search algorithm using a priority queue.

```js
import RBush from 'rbush';
import knn from 'rbush-knn';

const tree = new RBush(); // create RBush tree
tree.load(data); // bulk insert

const neighbors = knn(tree, 40, 40, 10); // return 10 nearest items around point [40, 40]
```

You can optionally pass a filter function to find k neighbors that satisfy a certain condition:

```js
const neighbors = knn(tree, 40, 40, 10, function (item) {
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
