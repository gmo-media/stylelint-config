/**
 * loose config
 */
const {levels: {LOOSE}, getRules} = require('./rules');

module.exports = {
  extends: 'stylelint-config-recommended',
  rules: getRules(LOOSE)
};
