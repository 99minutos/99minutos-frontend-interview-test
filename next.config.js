// const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, { isServer }) => {
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
    ];

    config.plugins = [
      ...(config.plugins || []),
      //new DotenvWebpackPlugin(),
      // new CopyWebpackPlugin({
      //     patterns: [
      //         {
      //             from: 'node_modules/pdfjs-dist/cmaps/',
      //             to: 'cmaps/'
      //         },
      //     ]
      // }),
    ];
    // if (!isServer) {
    //   config.node = {
    //     fs: 'empty',
    //     child_process: 'empty',
    //   };
    // }
    return config;
  },
};
