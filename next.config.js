module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  future: {
    webpack5: true,
  },
  async redirects() {
    // # todo remove when multiple auctions
    return [
      {
        source: '/',
        destination: '/token/0xAC47E534a3686eAD0BA2c868ba84754CCfe57af2/1',
        permanent: false,
      },
    ]
  },
};
