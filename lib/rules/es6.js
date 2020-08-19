module.exports = {
  rules: {
    /**
     * enforces no braces where they can be omitted
     * @url http://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    /**
     * require parens in arrow function arguments
     * @url http://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': ['error', 'as-needed'],

    /**
     * require space before/after arrow function's arrow
     * @url http://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * verify super() callings in constructors
     * @url https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * enforce the spacing around the * in generator functions
     * @url http://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * disallow modifying variables of class declarations
     * @url http://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * disallow arrow functions where they could be confused with comparisons
     * @url http://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    /**
     * disallow modifying variables that are declared using const
     * @url https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * disallow duplicate class members
     * @url http://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * disallow importing from the same path more than once
     * @url http://eslint.org/docs/rules/no-duplicate-imports
     *
     * replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'no-duplicate-imports': 'off',

    /**
     * disallow symbol constructor
     * @url http://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow specified names in exports
     * @url https://eslint.org/docs/rules/no-restricted-exports
     */
    'no-restricted-exports': 'off',

    /**
     * disallow specific imports
     * @url http://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * disallow to use this/super before super() calling in constructors.
     * @url http://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * disallow useless computed property keys
     * @url http://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'error',

    /**
     * disallow unnecessary constructor
     * @url http://eslint.org/docs/rules/no-useless-constructor
     *
     * For some reason, a fatal error is thrown complaining about missing `body`
     * when `no-useless-constructor` is an error. Solved by disabling the rule.
     */
    'no-useless-constructor': 'off',

    /**
     * disallow renaming import, export, and destructured assignments to the same name
     * @url http://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    /**
     * require let or const instead of var
     * @url https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',

    /**
     * require method and property shorthand syntax for object literals
     * @url http://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    /**
     * suggest using arrow functions as callbacks
     * @url https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    /**
     * suggest using of const declaration for variables that are never modified after declared
     * @url https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    /**
     * Prefer destructuring from arrays and objects
     * @url http://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    /**
     * disallow parseInt() in favor of binary, octal, and hexadecimal literals
     * @url http://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'error',

    /**
     * use rest parameters instead of arguments
     * @url http://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * suggest using the spread operator instead of .apply()
     * @url http://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'error',

    /**
     * suggest using template literals instead of string concatenation
     * @url http://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'error',

    /**
     * disallow generator functions that do not have yield
     * @url http://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * enforce spacing between object rest-spread
     * @url http://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * import sorting
     * @url http://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    /**
     * require a Symbol description
     * @url http://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'error',

    /**
     * enforce usage of spacing in template strings
     * @url http://eslint.org/docs/rules/template-curly-spacing
     */
    'template-curly-spacing': 'error',

    /**
     * enforce spacing around the * in yield* expressions
     * @url http://eslint.org/docs/rules/yield-star-spacing
     */
    'yield-star-spacing': ['error', 'after'],
  },
}
