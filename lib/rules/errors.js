module.exports = {
  rules: {
    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     * @url https://eslint.org/docs/rules/for-direction
     */
    'for-direction': 'error',

    /**
     * Enforce `return` statements in getters
     * @url https://eslint.org/docs/rules/getter-return
     */
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],

    /**
     * Disallow using an async function as a Promise executor
     * @url https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'error',

    /**
     * Disallow await inside of loops
     * @url http://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'error',

    /**
     * Disallow comparisons to negative zero
     * @url http://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'error',

    /**
     * disallow assignment in conditional expressions
     * @url https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': ['error', 'except-parens'],

    /**
     * disallow the use of specific console methods
     * @url https://eslint.org/docs/rules/no-console
     */
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      }
    ],

    /**
     * disallow use of constant expressions in conditions
     * @url https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'warn',

    /**
     * disallow control characters in regular expressions
     * @url https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * disallow the use of the `debugger` statement
     * @url https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * disallow duplicate arguments in functions
     * @url https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate conditions in if-else-if chains
     * @url https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * disallow duplicate keys when creating object literals
     * @url https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * disallow a duplicate case label.
     * @url https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * disallow empty statements
     * @url https://eslint.org/docs/rules/no-empty
     */
    'no-empty': 'error',

    /**
     * disallow the use of empty character classes in regular expressions
     * @url https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * disallow assigning to the exception in a catch block
     * @url https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * disallow double-negation boolean casts in a boolean context
     * @url http://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'error',

    /**
     * disallow unnecessary parentheses
     * @url http://eslint.org/docs/rules/no-extra-parens
     */
    'no-extra-parens': [
      'error',
      'all',
    ],

    /**
     * disallow unnecessary semicolons
     * @url https://eslint.org/docs/rules/no-extra-semi
     */
    'no-extra-semi': 'error',

    /**
     * disallow overwriting functions written as function declarations
     * @url https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'error',

    /**
     * Disallow assigning to imported bindings
     * @url https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': 'error',

    /**
     * disallow function or variable declarations in nested blocks
     * @url https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'error',

    /**
     * disallow invalid regular expression strings in the RegExp constructor
     * @url https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'error',

    /**
     * disallow irregular whitespace outside of strings and comments
     * @url https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'error',

    /**
     * Disallow literal numbers that lose precision
     * @url https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': 'error',

    /**
     * Disallow characters which are made with multiple code points in character class syntax
     * @url https://eslint.org/docs/rules/no-misleading-character-class
     */
    'no-misleading-character-class': 'error',

    /**
     * disallow the use of object properties of the global object (Math and JSON) as functions
     * @url https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'error',

    /**
     * Disallow returning values from Promise executor functions
     * @url https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',

    /**
     * disallow use of Object.prototypes builtins directly
     * @url http://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'error',

    /**
     * disallow multiple spaces in a regular expression literal
     * @url https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': 'error',

    /**
     * Disallow returning values from setters
     * @url https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'error',

    /**
     * disallow sparse arrays
     * @url https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings
     * @url http://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',

    /**
     * Avoid code that looks like two expressions but is actually one
     * @url http://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * disallow unreachable statements after a return, throw, continue, or break statement
     * @url https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'error',

    /**
     * Disallow loops with a body that allows only one iteration
     * @url https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',

    /**
     * disallow return/throw/break/continue inside finally blocks
     * @url http://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * disallow negating the left operand of relational operators
     * @url http://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'error',

    /**
     * Disallow useless backreferences in regular expressions
     * @url https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': 'error',

    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield
     *
     * This rule is a great idea, but we have it disabled because it is overly aggressive.
     * Waiting on the issue to be resolved before we turn it back on.
     *
     * @url https://eslint.org/docs/rules/require-atomic-updates
     * @url https://github.com/eslint/eslint/issues/11899
     */
    'require-atomic-updates': 'off',

    /**
     * disallow comparisons with the value NaN
     * @url https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'error',

    /**
     * ensure that the results of typeof are compared against a valid string
     * @url http://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
  },
}
