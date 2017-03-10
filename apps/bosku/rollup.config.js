import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'js/index.js',
  dest: 'public/js/index.js',
  sourceMap: false,
  external: [ 'hyperapp' ],
	plugins: [
		buble(),
    nodeResolve({ jsnext: true, module: true, main: true })
	]
};