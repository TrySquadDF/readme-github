//@ts-check
const eslint = require('@eslint/js')
const stylistic = require('@stylistic/eslint-plugin')
const tslint = require('typescript-eslint')
const globals = require('globals')


/** @type {import('typescript-eslint').ConfigWithExtends['rules']} */
const rules = {
  /*
   * Default nest js rules.
  */ 
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  /*
   * Custom rules.
  */ 
  // NestJS uses 'require' for module loading.
  '@typescript-eslint/no-var-requires': 0,
  // We don't use default exports anywhere.
  'import/prefer-default-export': 0,
  // We have no problem related to extraneous dependencies.
  'import/no-extraneous-dependencies': 0,
  // Usage of 'continue' is normal and prevents code from nesting.
  'no-continue': 0,
  // Sometimes we need to write 'void promise'.
  'no-void': 0
}

const ignoreTestFiles = ['test/**/*', '**/*.spec.ts']
const ignoreGeneratedFiles = ['**/generated-types/**/*']
const outputFiles = ['**/dist/**/*']

/** @type {import('typescript-eslint').ConfigWithExtends[]} */
const ignores = [...ignoreGeneratedFiles, ...outputFiles, ...ignoreTestFiles].map((directory)=>({
  ignores: [directory]
}))

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
module.exports = [...tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.strict,
  ...tslint.configs.stylistic,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: ['./tsconfig.build.json'],
        tsconfigRootDir: __dirname
      }
    },
    rules
  },
  ...ignores
), {
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    // Enable default behavior of this rule.
    "@stylistic/object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    // We select line endings depending on current OS.
    // See: https://stackoverflow.com/q/39114446/2771889
    "@stylistic/linebreak-style": ["error", process.platform === 'win32' ? 'windows' : 'unix'],
    // We have no problem with long lines.
    "@stylistic/max-len": ["error", {
      "code": 130
    }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "warn"
  }
}]