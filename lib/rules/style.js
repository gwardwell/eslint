module.exports = {
  rules: {
    /**
     * require trailing commas in multiline object literals
     * @url https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  }
};
