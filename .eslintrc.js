module.exports = {
    extends: ['./libs/react'],
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env'],
        },
    },
};
