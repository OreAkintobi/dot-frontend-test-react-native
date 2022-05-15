module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@service': './src/service',
            '@store': './src/store',
            '@theme': './src/theme',
            '@types': './src/types',
            '@utils': './src/utils',
            '@config': './src/config',
          },
        },
      ],
      'babel-plugin-styled-components',
    ],
  };
};
