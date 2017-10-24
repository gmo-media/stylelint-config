/**
 * regular config
 */
const {levels: {REGULAR}, getRules} = require('./rules');

module.exports = {
  extends: 'stylelint-config-standard',
  rules: getRules(REGULAR)
};
