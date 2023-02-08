import babel from '@rollup/plugin-babel';

const config = {
    input: 'src/main.jsx',
    output: {
        dir: 'dist',
        format: 'iife'
    },
    plugins: [babel({ babelHelpers: 'bundled', exclude: ['node_modules/**'] })]
};

export default config;