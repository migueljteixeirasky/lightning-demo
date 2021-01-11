const config = {
  plugins: [
    "@babel/plugin-transform-spread",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-transform-async-to-promises",
    [
      "const-enum",
      {
        transform: "constObject",
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        debug: false,
        spec: true,
        targets: {
          // TODO: This is a really ancient target that will add more polyfills than what's needed for the majority of the devices
          // We should have specific targets per device and create optimized builds for each of those
          chrome: "39",
        },
        useBuiltIns: "usage",
      },
    ],
    "babel-preset-const-enum",
  ],
};

module.exports = {
  env: {
    development: config,
    production: config,
    test: config,
  },
};
