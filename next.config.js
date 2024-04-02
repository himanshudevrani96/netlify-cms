// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for handling font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/fonts', // Output path for the font files
          publicPath: '/_next/static/fonts', // Public path for the font files
          name: '[name].[ext]', // Name of the output file
        },
      },
    });
    
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // Add a rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/pdf', // Output path for the PDF files
          publicPath: '/_next/static/pdf', // Public path for the PDF files
          name: '[name].[ext]', // Name of the output file
        },
      },
    });

    // Return the modified config
    return config;
  },
};
