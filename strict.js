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

        // Declaration
        'declaration-colon-newline-after': 'always-multi-line',

        // Declaration block
        'declaration-block-no-duplicate-properties': [true, {
            'ignore': ['consecutive-duplicates']
        }],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,

        // Selector
        'selector-max-compound-selectors': 4,
        'selector-max-specificity': '0,3,0',
        'selector-no-id': true,

        // At-rule
        'at-rule-empty-line-before': ['always', {
            'except': ['blockless-after-blockless', 'first-nested'],
            'ignore': ['after-comment'],
            'ignoreAtRules': ['if', 'else']
        }],
        'at-rule-no-unknown': [true, {
            'ignoreAtRules': ['at-root', 'content', 'debug', 'each', 'error', 'else', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'warn', 'while']
        }],

        // Comment
        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['stylelint-commands']
        }],
        'comment-whitespace-inside': 'always',

        // General / Sheet
        'no-invalid-double-slash-comments': true
    })
};
