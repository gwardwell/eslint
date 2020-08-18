module.exports = {
  rules: {
    /**
     * enforces getter/setter pairs in objects
     * @url https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': [
      'warn',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      }
    ],

    /**
     * enforces return statements in callbacks of array's methods
     * @url http://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'error',

    /**
     * treat var statements as if they were block scoped
     * @url https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * enforce that class methods use `this`
     * @url http://eslint.org/docs/rules/class-methods-use-this
     **/
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [
          // Nuxt/UVue
          'asyncData',
          // Vue
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
        ],
      },
    ],

    /**
     * specify the maximum cyclomatic complexity allowed in a program
     * @url https://eslint.org/docs/rules/complexity
     */
    complexity: ['off', 11],

    /**
     * require return statements to either always or never specify values
     * @url https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'error',

    /**
     * specify curly brace conventions for all control statements
     * @url https://eslint.org/docs/rules/curly
     */
    curly: ['error', 'multi-line'],

    /**
     * require default case in switch statements
     * @url https://eslint.org/docs/rules/default-case
     */
    'default-case': 'off',

    /**
     * Enforce default clauses in switch statements to be last
     * @url https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',

    /**
     * Enforce default parameters to be last
     * @url https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'error',

    /**
     * enforces consistent newlines before or after dots
     * http://eslint.org/docs/rules/dot-location
     */
    'dot-location': ['error', 'property'],

    /**
     * encourages use of dot notation whenever possible
     * @url https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    /** require the use of === and !==
     * http://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],

    /**
     * Require grouped accessor pairs in object literals and classes
     * @url https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    /**
     * make sure for-in loops have an if statement
     * @url https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'error',

    /**
     * Enforce a maximum number of classes per file
     * @url https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': ['error', 1],

    /**
     * disallow the use of alert, confirm, and prompt
     * @url https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'warn',

    /**
     * disallow use of arguments.caller or arguments.callee
     * @url https://eslint.org/docs/rules/no-alert
     */
    'no-caller': 'error',

    /**
     * disallow lexical declarations in case/default clauses
     * @url http://eslint.org/docs/rules/no-case-declarations.html
     */
    'no-case-declarations': 'error',

    /**
     * Disallow returning value from constructor
     * @url https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * disallow division operators explicitly at beginning of regular expression
     * @url http://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /**
     * disallow else after a return in an if
     * @url https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'error',

    /**
     * disallow empty functions, except for standalone funcs/arrows
     * @url http://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    /**
     * disallow empty destructuring patterns
     * @url http://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * disallow comparisons to null without a type-checking operator
     * @url https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * disallow use of eval()
     * @url https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * disallow adding to native types
     * https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',

    /**
     * disallow unnecessary function binding
     * @url https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',

    /**
     * disallow Unnecessary Labels
     * @url http://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',

    /**
     * disallow fallthrough of case statements
     * @url https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * disallow the use of leading or trailing decimal points in numeric literals
     * @url https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',

    /**
     * disallow reassignments of native objects or read-only globals
     * @url http://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],

    /**
     * disallow implicit type conversions
     * @url http://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    /**
     * disallow var and named functions in global scope
     * @url http://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'off',

    /**
     * disallow use of eval()-like methods
     * @url https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * disallow this keywords outside of classes or class-like objects
     * @url https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * disallow usage of __iterator__ property
     * @url https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',

    /**
     * disallow use of labels for anything other then loops and switches
     * @url https://eslint.org/docs/rules/no-labels
     */
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],

    /**
     * disallow unnecessary nested blocks
     * @url https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /**
     * disallow creation of functions within loops
     * @url https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * disallow magic numbers
     * @url http://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': [
      'error',
      {
        ignore: [],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    /**
     * disallow use of multiple spaces
     * @url https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',

    /**
     * disallow use of multiline strings
     * @url https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /**
     * disallow use of new operator when not part of the assignment or comparison
     * @url https://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',

    /**
     * disallow use of new operator for Function object
     * @url https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',

    /**
     * disallows creating new instances of String, Number, and Boolean
     * @url https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * disallow use of (old style) octal literals
     * @url https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * disallow use of octal escape sequences in string literals, such as
     * var foo = 'Copyright \251';
     * @url https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',

    /**
     * disallow reassignment of function parameters
     * disallow parameter object manipulation except for specific exclusions
     * @url http://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'app', // allow extending the Nuxt app
          'ctx', // for Koa routing
          'e', // for e.returnvalue
          'getters', // for Vuex getters
          'node', // for SSR directives
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'ssr',
          'state', // for Vuex state
          'Vue',
        ],
      },
    ],

    /**
     * disallow usage of __proto__ property
     * @url https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * disallow declaring the same variable more then once
     * @url https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * disallow certain object properties
     * @url http://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    /**
     * disallow use of assignment in return statement
     * @url https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',

    /**
     * disallow redundant `return await`
     * @url https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /**
     * disallow use of `javascript:` urls
     * @url https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /**
     * disallow self assignment
     * @url http://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * disallow comparisons where both sides are exactly the same
     * @url https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * disallow use of comma operator
     * @url https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * restrict what can be thrown as an exception
     * @url https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',

    /**
     * disallow unmodified conditions of loops
     * @url http://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'off',

    /**
     * disallow usage of expressions in statement position
     * @url https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    /**
     * disallow unused labels
     * @url http://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * disallow unnecessary .call() and .apply()
     * @url https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'off',

    /**
     * Disallow unnecessary `catch` clauses
     * @url https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': '',

    /**
     * disallow useless string concatenation
     * @url http://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * disallow unnecessary string escaping
     * @url http://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /**
     * disallow redundant return; keywords
     * @url http://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * disallow use of void operator
     * @url http://eslint.org/docs/rules/no-void
     */
    'no-void': 'error',

    /**
     * disallow usage of configurable warning terms in comments: e.g. todo
     * @url https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fixme', 'error', '?'],
        location: 'start',
      },
    ],

    /**
     * disallow use of the with statement
     * @url https://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /**
     * Enforce using named capture group in regular expression
     * @url https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'warn',

    /**
     * require using Error objects as Promise rejection reasons
     * @url http://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],

    /**
     * Disallow use of the RegExp constructor in favor of regular expression literals
     * @url https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],

    /**
     * disallow the second argument for parseInt()
     * @url https://eslint.org/docs/rules/radix
     */
    radix: [
      'warn',
      {
        'as-needed': true
      }
    ],

    /**
     * require `await` in `async function` (note: this is a horrible rule that should never be used)
     * @url http://eslint.org/docs/rules/require-await
     */
    'require-await': 'off',

    /**
     * Enforce the use of `u` flag on RegExp
     * @url https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',

    /**
     * requires to declare all vars on top of their containing scope
     * @url https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'error',

    /**
     * require immediate function invocation to be wrapped in parentheses
     * @url http://eslint.org/docs/rules/wrap-iife.html
     */
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: false,
      },
    ],

    /**
     * require or disallow Yoda conditions
     * @url https://eslint.org/docs/rules/yoda
     */
    yoda: 'warn',
  }
}
