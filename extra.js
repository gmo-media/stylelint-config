/**
 * extra config
 */
const {levels: {EXTRA}, getRules} = require('./rules');

module.exports = {
  extends: 'stylelint-config-standard',
  rules: getRules(EXTRA)
};
