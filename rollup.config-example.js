import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';

const isDevelopment = process.env.NODE_ENV === 'development';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/examples/example_boilerplate.tsx',
  output: {
    file: 'build/example_boilerplate.js',
    format: 'iife',
    name: 'ExampleBundle',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/client': 'ReactDOMClient',
    },
  },
  plugins: [
    // peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        isDevelopment ? 'development' : 'production'
      ),
      preventAssignment: true,
    }),
    commonjs(),
    postcss(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      // inlineSources: isDevelopment,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  // external: ['react', 'react-dom', 'd3-milestones'],
};
