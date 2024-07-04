import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const output = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'rbush-knn',
        format: 'umd',
        file
    },
    plugins
});

export default [
    output('rbush-knn.js', [resolve()]),
    output('rbush-knn.min.js', [resolve(), terser()])
];
