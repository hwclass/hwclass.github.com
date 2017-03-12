import buble from 'rollup-plugin-buble';
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import eslint from 'rollup-plugin-eslint';

/*
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
*/

export default {
  entry: 'js/index.js',
  dest: 'public/js/index.js',
  plugins: [
    buble(),
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
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
  ],
  sourceMap: true
}