import Queue from 'tinyqueue';

export default function knn(tree, x, y, n, predicate, maxDistance) {
    let node = tree.data;
    const result = [];
    const toBBox = tree.toBBox;

    const queue = new Queue(undefined, compareDist);

    while (node) {
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const dist = boxDist(x, y, node.leaf ? toBBox(child) : child);
            if (!maxDistance || dist <= maxDistance * maxDistance) {
                queue.push({
                    node: child,
                    isItem: node.leaf,
                    dist
                });
            }
        }

        while (queue.length && queue.peek().isItem) {
            const candidate = queue.pop().node;
            if (!predicate || predicate(candidate))
                result.push(candidate);
            if (n && result.length === n) return result;
        }

        node = queue.pop();
        if (node) node = node.node;
    }

    return result;
}

function compareDist(a, b) {
    return a.dist - b.dist;
}

function boxDist(x, y, box) {
    const dx = axisDist(x, box.minX, box.maxX),
        dy = axisDist(y, box.minY, box.maxY);
    return dx * dx + dy * dy;
}

function axisDist(k, min, max) {
    return k < min ? min - k : k <= max ? 0 : k - max;
}
