/**
 * regular config
 */
module.exports = {
    'rules': Object.assign(require('./loose').rules, {
        // Color
        'color-hex-length': 'short',
        'color-named': 'never',

        // Font
        'font-weight-notation': 'named-where-possible',

        // Value and Utit
        'number-no-trailing-zeros': true,
        'length-zero-no-unit': true,
        'time-no-imperceptible': true,

        // Shorthand property
        'shorthand-property-no-redundant-values': true,

        // Keyframe declaration
        'keyframe-declaration-no-important': true,

        // Declaration
        'declaration-no-important': true,

        // Block
        'block-no-empty': true,

        // Selector
        'selector-max-compound-selectors': 5,
        'selector-no-qualifying-type': [true, {
            'ignore': ['attribute']
        }],
        'selector-no-universal': true,
        'selector-root-no-composition': true,

        // stylelint-disable comment
        'stylelint-disable-reason': 'always-before',

        // General / Sheet
        'max-nesting-depth': [4, {
            'ignore': ['at-rules-without-declaration-blocks']
        }]
    })
};
