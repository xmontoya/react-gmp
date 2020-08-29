module.exports = function(api) {
    api.cache(false);
    const presets = ["@babel/preset-env", "@babel/preset-react"]
    const plugins =  ["@babel/plugin-proposal-export-default-from"]

    const config = {
        presets,
        plugins
    }

    return config;
};
