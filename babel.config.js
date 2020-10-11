module.exports = function(api) {
    api.cache(false);

    const env = process.env.BABEL_ENV || process.env.NODE_ENV || '';
    const isProd = env === 'production';

    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins =  [
        '@babel/plugin-proposal-export-default-from',
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: true
            }
        ]
    ];

    const config = {
        presets,
        plugins,
        env: {
            test: {
                plugins: [
                    '@babel/plugin-transform-modules-commonjs',
                    '@babel/plugin-transform-runtime'
                ]
            }
        }
    }

    return config;
};
