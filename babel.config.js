module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            hooks: './src/hooks',
            styles: './src/styles',
            types: './src/types',
            utils: './src/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
