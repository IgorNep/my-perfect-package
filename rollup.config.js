import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      modules: true,
      autoModules: true,
      plugins: [],
    }),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
        {
          src: 'src/SurveyTest/assets',
          dest: 'build/SurveyTest/',
        },
      ],
    }),
    svg(),
    image(),
    url(),
  ],
};
