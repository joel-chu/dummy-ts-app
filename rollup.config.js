import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

// const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/dummy.js',
      format: 'cjs',
      sourcemap: true,
      name: 'dummyApp'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
}
