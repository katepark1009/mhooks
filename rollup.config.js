import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import svg from 'rollup-plugin-svg'
import analyze from 'rollup-plugin-analyzer'
import filesize from 'rollup-plugin-filesize'

const config = {
  input: 'index.js',
  external: ['react', 'prop-types'],
  output: {
    format: 'umd',
    name: 'mhooks',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes'
    }
  },
  plugins: [
    babel({ exclude: ['node_modules/**'] }),
    terser(),
    svg(),
    analyze(),
    filesize()
  ]
}

export default config
