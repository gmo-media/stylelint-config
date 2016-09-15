/**
 * regular config
 */
module.exports = {
    'rules': Object.assign(require('./loose').rules, {
        // Color
        'color-no-invalid-hex': true,

        // Function
        'function-calc-no-unspaced-operator': true,

        // Value and Utit
        'number-no-trailing-zeros': true,
        'string-no-newline': true,
        'length-zero-no-unit': true,
        'time-no-imperceptible': true,
        'unit-no-unknown': true,

        // Shorthand property
        'shorthand-property-no-redundant-values': true,

        // Property
        'property-no-unknown': true,

        // Keyframe declaration
        'keyframe-declaration-no-important': true,

        // Declaration
        'declaration-no-important': true,

        // Block
        'block-no-empty': true,

        // Selector
        'selector-no-universal': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-root-no-composition': true,
        'selector-type-no-unknown': true,

        // Media feature
        'media-feature-no-missing-punctuation': true,

        // General / Sheet
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': true
    })
};
