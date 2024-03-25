module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss/nesting')('postcss-nesting'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1, 'nesting-rules': false }),
  ]
};
