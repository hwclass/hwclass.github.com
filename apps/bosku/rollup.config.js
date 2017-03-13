import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import jsx from 'rollup-plugin-jsx'

export default {
  plugins: [
    babel({
      babelrc: false,
      plugins: [
        jsx( {factory: 'h'} )
      ]
    }),
    resolve({
      jsnext: true
    }),
    uglify()
  ]
}