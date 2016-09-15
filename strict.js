/**
 * strict config
 */
module.exports = {
    'rules': Object.assign(require('./regular').rules, {
        // Function
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-url-data-uris': 'never',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        // Custom property
        'custom-property-no-outside-root': true,

        // Declaration
        'declaration-colon-newline-after': 'always-multi-line',

        // Declaration block
        'declaration-block-no-duplicate-properties': [true, {
            'ignore': ['consecutive-duplicates']
        }],
        'declaration-block-no-ignored-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,

        // Selector
        'selector-max-compound-selectors': 4,
        'selector-max-specificity': '0,3,0',
        'selector-no-id': true,

        // Root rule
        'root-no-standard-properties': true,

        // Rule
        'rule-non-nested-empty-line-before': ['always-multi-line', {
            'except': ['after-single-line-comment'],
            'ignore': ['after-comment']
        }],

        // At-rule
        'at-rule-empty-line-before': ['always', {
            'except': ['blockless-group', 'first-nested'],
            'ignore': ['after-comment']
        }],
        'at-rule-no-unknown': [true, {
            'ignoreAtRules': ['at-root', 'content', 'debug', 'each', 'error', 'else', 'extend', 'for', 'if', 'include', 'mixin', 'warn', 'while']
        }],

        // Comment
        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['stylelint-commands']
        }],
        'comment-whitespace-inside': 'always',

        // General / Sheet
        'indentation': 4,
        'no-browser-hacks': [true, {
            'browsers': 'last 2 versions'
        }],
        'no-invalid-double-slash-comments': true,
        'no-unsupported-browser-features': [true, {
            'browsers': 'last 2 versions'
        }]
    })
};
