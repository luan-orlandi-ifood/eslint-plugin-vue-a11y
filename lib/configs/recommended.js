/*
 * IMPORTANT!
 * This file has been automatically generated,
 * in order to update it's content execute "npm run update"
 */
module.exports = {
  extends: require.resolve('./base'),
  rules: {
    'vue-a11y/interactive-supports-focus': 'error',
    'vue-a11y/aria-role': [ 2, {
      "ignoreNonDOM": true
    }],
    'vue-a11y/aria-props': 'error',
    'vue-a11y/aria-unsupported-elements': 'error',
    'vue-a11y/no-redundant-roles': 'error',
    'vue-a11y/role-has-required-aria-props': 'error'
  }
}
