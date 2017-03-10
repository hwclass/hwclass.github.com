import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve'
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'js/index.js',
  dest: 'public/js/index.js',
  sourceMap: false,
  external: [ 'hyperapp' ],
	plugins: [
    eslint({
      "env": {
        "browser": true,
        "es6": true
      },
      "extends": "eslint:recommended",
      "parserOptions": {
        "sourceType": "module"
      },
      "rules": {
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ]
      }
    }),
		buble(),
    nodeResolve({ jsnext: true, module: true, main: true })
	]
};