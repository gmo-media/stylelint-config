/**
 * loose config
 */
module.exports = {
    'rules': {
        // Color
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',

        // Font
        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': 'named-where-possible',

        // Function
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',

        // Value and Utit
        'unit-case': 'lower',
        'value-keyword-case': 'lower',

        // Value list
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',

        // Property
        'property-case': 'lower',

        // Declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',

        // Declaration block
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        // Block
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        // Selector
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-max-compound-selectors': 5,
        'selector-max-empty-lines': 0,
        'selector-no-qualifying-type': [true, {
            'ignore': ['attribute']
        }],
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-type-case': 'lower',

        // Selector list
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        // Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        // Media query list
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        // At-rule
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',

        // stylelint-disable comment
        'stylelint-disable-reason': 'always-before',

        // General / Sheet
        'max-empty-lines': 1,
        'max-nesting-depth': [4, {
            'ignore': ['at-rules-without-declaration-blocks']
        }]
    }
};
