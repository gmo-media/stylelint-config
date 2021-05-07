'use strict';

const STANDARD    = 99;
const RECOMMENDED = 99;
const UNUSE       = -1;
const LOOSE       = 0;
const REGULAR     = 1;
const EXTRA       = 2;

function regexp2pattern(regexp) {
  return `/${regexp.source}/`;
}

/**
 * Rules
 * https://stylelint.io/user-guide/rules/
 */
const Rules = {
  /**
   * Possible errors
   */
  // Color
  'color-no-invalid-hex': [RECOMMENDED],

  // Font family
  'font-family-no-duplicate-names': [RECOMMENDED],
  'font-family-no-missing-generic-family-keyword': [RECOMMENDED],

  // Function
  'function-calc-no-unspaced-operator': [RECOMMENDED],
  'function-linear-gradient-no-nonstandard-direction': [RECOMMENDED],

  // String
  'string-no-newline': [RECOMMENDED],

  // Unit
  'unit-no-unknown': [RECOMMENDED],

  // Shorthand property
  'shorthand-property-no-redundant-values': [RECOMMENDED],

  // Property
  'property-no-unknown': [RECOMMENDED],

  // Keyframe declaration
  'keyframe-declaration-no-important': [RECOMMENDED],

  // Declaration block
  'declaration-block-no-duplicate-properties': [RECOMMENDED],
  'declaration-block-no-redundant-longhand-properties': [RECOMMENDED],
  'declaration-block-no-shorthand-property-overrides': [RECOMMENDED],

  // Block
  'block-no-empty': [RECOMMENDED],

  // Selector
  'selector-pseudo-class-no-unknown': [RECOMMENDED],
  'selector-pseudo-element-no-unknown': [RECOMMENDED],
  'selector-type-no-unknown': [RECOMMENDED],

  // Media feature
  'media-feature-name-no-unknown': [RECOMMENDED],

  // At-rule
  'at-rule-no-unknown': [LOOSE, [true, {                    // override recommended
    'ignoreAtRules': [
      // Sass
      'at-root',
      'content',
      'debug',
      'each',
      'error',
      'else',
      'extend',
      'for',
      'forward',
      'function',
      'if',
      'include',
      'mixin',
      'return',
      'use',
      'warn',
      'while',
      // postcss-normalize
      'import-normalize'
    ]
  }]],

  // Comment
  'comment-no-empty': [RECOMMENDED],

  // General / Sheet
  'no-descending-specificity': [UNUSE],
  'no-duplicate-at-import-rules': [RECOMMENDED],
  'no-duplicate-selectors': [LOOSE, true],
  'no-empty-source': [RECOMMENDED],
  'no-extra-semicolons': [RECOMMENDED],
  'no-invalid-double-slash-comments': [RECOMMENDED],
  'no-unknown-animations': [LOOSE, true],

  /**
   * Limit language features
   */
  // Color
  'color-named': [REGULAR, ['never', {
    ignore: ["inside-function"]
  }]],
  'color-no-hex': [UNUSE],

  // Function
  'function-blacklist': [UNUSE],
  'function-url-no-scheme-relative': [UNUSE],
  'function-url-scheme-blacklist': [UNUSE],
  'function-url-scheme-whitelist': [REGULAR, ['http', 'https', 'data']],
  'function-whitelist': [UNUSE],

  // Number
  'number-max-precision': [REGULAR, 6],

  // Time
  'time-min-milliseconds': [UNUSE],

  // Unit
  'unit-blacklist': [UNUSE],
  'unit-whitelist': [UNUSE],

  // Value
  'value-no-vendor-prefix': [UNUSE],

  // Custom property
  'custom-property-pattern': [UNUSE],

  // Property
  'property-blacklist': [UNUSE],
  'property-no-vendor-prefix': [UNUSE],
  'property-whitelist': [UNUSE],

  // Declaration
  'declaration-no-important': [REGULAR, true],
  'declaration-property-unit-blacklist': [UNUSE],
  'declaration-property-unit-whitelist': [UNUSE],
  'declaration-property-value-blacklist': [UNUSE],
  'declaration-property-value-whitelist': [UNUSE],

  // Declaration block
  'declaration-block-single-line-max-declarations': [STANDARD],

  // Selector
  'selector-attribute-operator-blacklist': [UNUSE],
  'selector-attribute-operator-whitelist': [UNUSE],
  'selector-class-pattern': [UNUSE],
  'selector-id-pattern': [UNUSE],
  'selector-max-attribute': [REGULAR, 2],
  'selector-max-class': [REGULAR, 3],
  'selector-max-combinators': [UNUSE],
  'selector-max-compound-selectors': [EXTRA, 5],
  'selector-max-empty-lines': [STANDARD],
  'selector-max-id': [REGULAR, 1],
  'selector-max-specificity': [EXTRA, '0,3,3'],
  'selector-max-type': [REGULAR, 2],
  'selector-max-universal': [REGULAR, 1],
  'selector-nested-pattern': [UNUSE],
  'selector-no-qualifying-type': [REGULAR, [true, {
    ignore: ['attribute']
  }]],
  'selector-no-vendor-prefix': [UNUSE],
  'selector-pseudo-class-blacklist': [UNUSE],
  'selector-pseudo-class-whitelist': [UNUSE],

  // Media feature
  'media-feature-name-blacklist': [UNUSE],
  'media-feature-name-no-vendor-prefix': [UNUSE],
  'media-feature-name-whitelist': [UNUSE],

  // Custom media
  'custom-media-pattern': [UNUSE],

  // At-rule
  'at-rule-blacklist': [UNUSE],
  'at-rule-no-vendor-prefix': [UNUSE],
  'at-rule-whitelist': [UNUSE],

  // Comment
  'comment-word-blacklist': [UNUSE],

  // General / Sheet
  'max-nesting-depth': [REGULAR, [4, {
    ignore: ['blockless-at-rules'],
    ignoreAtRules: ['media', 'include']
  }]],

  /**
   * Stylistic issues
   */
  // Color
  'color-hex-case': [STANDARD],
  'color-hex-length': [STANDARD],

  // Font family
  'font-family-name-quotes': [REGULAR, 'always-where-recommended'],

  // Font weight
  'font-weight-notation': [REGULAR, 'named-where-possible'],

  // Function
  'function-comma-newline-after': [STANDARD],
  'function-comma-newline-before': [STANDARD],
  'function-comma-space-after': [STANDARD],
  'function-comma-space-before': [STANDARD],
  'function-max-empty-lines': [STANDARD],
  'function-name-case': [STANDARD],
  'function-parentheses-newline-inside': [STANDARD],
  'function-parentheses-space-inside': [STANDARD],
  'function-url-quotes': [REGULAR, 'always'],
  'function-whitespace-after': [STANDARD],

  // Number
  'number-leading-zero': [STANDARD],
  'number-no-trailing-zeros': [STANDARD],

  // String
  'string-quotes': [REGULAR, 'double'],

  // Length
  'length-zero-no-unit': [STANDARD],

  // Unit
  'unit-case': [STANDARD],

  // Value
  'value-keyword-case': [UNUSE],

  // Value list
  'value-list-comma-newline-after': [STANDARD],
  'value-list-comma-newline-before': [STANDARD],
  'value-list-comma-space-after': [STANDARD],
  'value-list-comma-space-before': [STANDARD],
  'value-list-max-empty-lines': [STANDARD],

  // Custom property
  'custom-property-empty-line-before': [STANDARD],

  // Property
  'property-case': [STANDARD],

  // Declaration
  'declaration-bang-space-after': [STANDARD],
  'declaration-bang-space-before': [STANDARD],
  'declaration-colon-newline-after': [STANDARD],
  'declaration-colon-space-after': [STANDARD],
  'declaration-colon-space-before': [STANDARD],
  'declaration-empty-line-before': [STANDARD],

  // Declaration block
  'declaration-block-semicolon-newline-after': [STANDARD],
  'declaration-block-semicolon-newline-before': [STANDARD],
  'declaration-block-semicolon-space-after': [STANDARD],
  'declaration-block-semicolon-space-before': [STANDARD],
  'declaration-block-trailing-semicolon': [STANDARD],

  // Block
  'block-closing-brace-empty-line-before': [STANDARD],
  'block-closing-brace-newline-after': [REGULAR, ['always', {       // override standard
    ignoreAtRules: ['if', 'else']
  }]],
  'block-closing-brace-newline-before': [STANDARD],
  'block-closing-brace-space-after': [STANDARD],
  'block-closing-brace-space-before': [STANDARD],
  'block-opening-brace-newline-after': [STANDARD],
  'block-opening-brace-newline-before': [STANDARD],
  'block-opening-brace-space-after': [STANDARD],
  'block-opening-brace-space-before': [STANDARD],

  // Selector
  'selector-attribute-brackets-space-inside': [STANDARD],
  'selector-attribute-operator-space-after': [STANDARD],
  'selector-attribute-operator-space-before': [STANDARD],
  'selector-attribute-quotes': [REGULAR, 'always'],
  'selector-combinator-space-after': [STANDARD],
  'selector-combinator-space-before': [STANDARD],
  'selector-descendant-combinator-no-non-space': [STANDARD],
  'selector-pseudo-class-case': [STANDARD],
  'selector-pseudo-class-parentheses-space-inside': [STANDARD],
  'selector-pseudo-element-case': [STANDARD],
  'selector-pseudo-element-colon-notation': [STANDARD],
  'selector-type-case': [STANDARD],

  // Selector list
  'selector-list-comma-newline-after': [STANDARD],
  'selector-list-comma-newline-before': [STANDARD],
  'selector-list-comma-space-after': [STANDARD],
  'selector-list-comma-space-before': [STANDARD],

  // Rule
  'rule-empty-line-before': [STANDARD],

  // Media feature
  'media-feature-colon-space-after': [STANDARD],
  'media-feature-colon-space-before': [STANDARD],
  'media-feature-name-case': [STANDARD],
  'media-feature-parentheses-space-inside': [STANDARD],
  'media-feature-range-operator-space-after': [STANDARD],
  'media-feature-range-operator-space-before': [STANDARD],

  // Media query list
  'media-query-list-comma-newline-after': [STANDARD],
  'media-query-list-comma-newline-before': [STANDARD],
  'media-query-list-comma-space-after': [STANDARD],
  'media-query-list-comma-space-before': [STANDARD],

  // At-rule
  'at-rule-empty-line-before': [REGULAR, ['always', {       // override standard
    except: [
      'blockless-after-same-name-blockless',
      'first-nested'
    ],
    ignore: ['after-comment'],
    ignoreAtRules: ['if', 'else']
  }]],
  'at-rule-name-case': [STANDARD],
  'at-rule-name-newline-after': [UNUSE],
  'at-rule-name-space-after': [STANDARD],
  'at-rule-semicolon-newline-after': [STANDARD],
  'at-rule-semicolon-space-before': [REGULAR, 'never'],

  // Comment
  'comment-empty-line-before': [STANDARD],
  'comment-whitespace-inside': [STANDARD],

  // General / Sheet
  'indentation': [STANDARD],
  'max-empty-lines': [STANDARD],
  'max-line-length': [EXTRA, [80, {
    ignore: ['comments'],
    ignorePattern: [
      /@import\s/,
      /url\([^)]+\)/,
      /font-family:/,
      /background:/,
      /background-image:/,
      /\$\w+(-\w+)*:/,          // Sass変数定義
      /\S+\s+\/\/.+/            // 行末コメント
    ].map(regexp2pattern)
  }]],
  'no-eol-whitespace': [STANDARD],
  'no-missing-end-of-source-newline': [STANDARD]
};

function levelFilter(level) {
  return (rule) => Rules[rule][0] <= level;
}

function ruleReducer(result, rule) {
  result[rule] = Rules[rule][1] || null;
  return result;
}

module.exports = {
  levels: {
    LOOSE, REGULAR, EXTRA
  },
  getRules(level) {
    return Object.keys(Rules)
      .filter(levelFilter(level))
      .reduce(ruleReducer, {});
  }
};
