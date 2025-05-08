import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output: [
    {
      file: './build/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './build/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      // inlineSources: isDevelopment,
    }),
  ],
  external: ['react', 'react-dom', 'd3-milestones'],
};
