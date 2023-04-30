import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/main.jsx',
    output: {
        dir: 'dist',
        format: 'iife'
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json', }),
        babel({ babelHelpers: 'bundled', exclude: ['node_modules/**'], extensions: ['.js', '.jsx', '.ts', '.tsx'] })
    ]
};

export default config;