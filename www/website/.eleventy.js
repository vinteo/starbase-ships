const _ = require('lodash');
const path = require('path');
const svgContents = require('eleventy-plugin-svg-contents');
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const { accessSync, constants, readdirSync } = require('fs');

const basePath = path.join(__dirname, '../../');

const getShipsData = () =>
  _(readdirSync(basePath, { withFileTypes: true }))
    .map((dir) => {
      const shipFile = path.join(basePath, dir.name, 'ship.json');
      try {
        accessSync(shipFile, constants.F_OK);
      } catch {
        return [];
      }

      const ship = require(shipFile);
      try {
        const premiumShipFile = path.join(
          basePath,
          dir.name,
          'premium',
          'ship.json'
        );
        accessSync(premiumShipFile, constants.F_OK);
        const premiumShip = require(premiumShipFile);
        return [ship, premiumShip];
      } catch {
        return [ship];
      }
    })
    .flatten()
    .compact()
    .orderBy('name')
    .value();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy({
    './node_modules/@nordhealth/css/lib/nord.min.css': 'css/nord.min.css',
    './node_modules/@nordhealth/themes/lib/nord-dark.css': 'css/nord-dark.css',
    './node_modules/@splidejs/splide/dist/css/splide.min.css':
      'css/splide.min.css',
    './node_modules/@nordhealth/fonts/lib/': 'css/fonts',

    './_includes/assets/js/nord-components.js': 'js/nord-components.js',
    './node_modules/@splidejs/splide/dist/js/splide.min.js': 'js/splide.min.js',

    './_includes/assets/css/custom.css': 'css/custom.css',

    '../../others/egotech/logos': 'images/logos',
  });

  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());
  eleventyConfig.addGlobalData('ships', () => getShipsData());
};