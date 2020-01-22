import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import analyze from 'rollup-plugin-analyzer'
import filesize from 'rollup-plugin-filesize'

const config = {
  input: 'index.js',
  external: ['react', 'prop-types', 'axios'],
  output: {
    format: 'umd',
    name: 'mhooks',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      'axios': 'defaultAxios'
    }
  },
  plugins: [
    babel({ exclude: ['node_modules/**'] }),
    terser(),
    analyze(),
    filesize()
  ]
}

export default config
