module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        // ecmaVersion: 2020,
        // extensions: ['.vue', '.js'],
        babelOptions: {
            presets: ['@babel/preset-env'],
        },
    },
    // settings: {
    //     // 'import/resolver': {
    //     //     node: {},
    //     // },
    //     // 'import/resolver': {
    //     //     'babel-module': {},
    //     // },
    // },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: ['babel', 'vue', 'import', 'node'],
    globals: {
        mapState: true,
        mapGetters: true,
        mapMutations: true,
        mapActions: true,
    },
    rules: {
        /* Possible Errors */
        'no-await-in-loop': 'error',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-debugger': 'error',
        'no-extra-parens': 'error',
        'no-promise-executor-return': 'error',
        'no-unreachable-loop': 'error',

        /* Best Practices */
        'accessor-pairs': 'error',
        'array-callback-return': [
            'error',
            {
                allowImplicit: true,
            },
        ],
        'class-methods-use-this': 'error',
        'complexity': ['warn', 5],
        'curly': ['error', 'multi-line'],
        'default-case': [
            'error',
            {
                commentPattern: '^no\\sdefault',
            },
        ],
        'default-case-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': ['error', 'always'],
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'max-classes-per-file': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-else-return': [
            'error',
            {
                allowElseIf: true,
            },
        ],
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-magic-numbers': 0,
        // 'no-magic-numbers': [
        //     'warn',
        //     {
        //         ignoreArrayIndexes: true,
        //         ignore: [-1, 0, 1, 2],
        //         ignoreDefaultValues: true,
        //     },
        // ],
        'no-multi-spaces': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'radix': 'error',
        'require-await': 'error',
        'yoda': 'error',

        /* Strict Mode */
        'strict': 'error',

        /* Variables */
        'init-declarations': 'error',
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-use-before-define': 'error',

        /* Stylistic Issues */
        'array-bracket-newline': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'camelcase': [
            'error',
            {
                properties: 'never',
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-names': ['error', 'always'],
        'func-style': ['error', 'expression'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        // 'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always'],
        'max-depth': ['error', 3],
        'max-len': [
            'warn',
            {
                code: 100,
                ignoreStrings: true,
                ignoreTrailingComments: true,
                ignoreComments: true,
                ignorePattern: '\\s*[path,background-image]\\s*',
            },
        ],
        'max-lines-per-function': [
            'warn',
            {
                max: 40,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],
        'max-nested-callbacks': ['warn', 2],
        'max-params': ['warn', 2],
        'max-statements-per-line': 'error',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true,
                properties: false,
            },
        ],
        'new-parens': ['error', 'always'],
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-continue': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-nested-ternary': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': [
            'error',
            {
                ignoreComments: true,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
                allowAfterSuper: true,
                allowAfterThisConstructor: true,
            },
        ],
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true,
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'one-var': [
            'error',
            {
                initialized: 'never',
                uninitialized: 'always',
            },
        ],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'if', 'for'],
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'if', 'for'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],

        /* ECMAScript 6 */
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'generator-star-spacing': [
            'error',
            {
                before: true,
                after: false,
            },
        ],
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
            },
        ],
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
            },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': [
            'error',
            {
                before: true,
                after: false,
            },
        ],

        /* eslint-plugin-import */
        'import/default': 'error',
        'import/extensions': ['error', 'always'],
        'import/named': 'error',
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-unresolved': 0,
        'import/no-useless-path-segments': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', /* node.js modules, e.g. "fs", "path" */
                    'external', /* modules from node_modules, e.g. "lodash" */
                    'internal', /* modules with alias path, e.g. "@v4/foo/bar/baz.js" */
                    'parent', /* modules from "parent" directory, e.g. "../foo.js", "../../foo/bar.js" */
                    'sibling', /* modules from the same or a sibling's directory, e.g. "./foo.js", "./foo/bar.js" */
                    'index', /* "index" file of the current directory "./index.js" */
                ],
                pathGroups: [
                    {
                        pattern: '**/*.css',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '**/utils/**/*.js',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**/mixins/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**/*.vue',
                        group: 'internal',
                        position: 'after',
                    },
                ],
            },
        ],
        'import/prefer-default-export': 'warn',

        /* eslint-plugin-node */
        'node/no-callback-literal': 'off',
        'node/no-deprecated-api': [
            'error',
            {
                ignoreModuleItems: ['constants'],
            },
        ],

        /* eslint-plugin-vue */
        /* Priority A: Essential */
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/no-multiple-template-root': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'warn',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_',
            },
        ],
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/require-component-is': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',

        /* Priority B: Strongly Recommended */
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': ['error', 'double'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': 1,
        'vue/multiline-html-element-content-newline': [
            'error',
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: false,
            },
        ],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/one-component-per-file': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
            },
        ],
        'vue/v-bind-style': ['error', 'shorthand'],
        'vue/v-on-style': ['error', 'shorthand'],
        'vue/v-slot-style': ['error', 'shorthand'],

        /* Priority C: Recommended */
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'CONDITIONALS',
                    'TWO_WAY_BINDING',
                    'LIST_RENDERING',
                    'UNIQUE',
                    'SLOT',
                    'RENDER_MODIFIERS',
                    'OTHER_DIRECTIVES',
                    'CONTENT',
                    'GLOBAL',
                    'OTHER_ATTR',
                    'EVENTS',
                ],
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: [['script', 'template'], 'style'],
            },
        ],
        'vue/no-lone-template': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    ['components', 'directives', 'filters'],
                    'functional',
                    ['delimiters', 'comments'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'data',
                    'computed',
                    'methods',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'ROUTER_GUARDS',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/this-in-template': 'error',

        /* Uncategorized */
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
            },
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': [
            'error',
            'camelCase',
            {
                ignores: ['/^[a-zA-Z]+(?:[a-zA-Z]+)*:[a-zA-Z]+(?:[a-zA-Z]+)*(:[a-zA-Z]+(?:[a-zA-Z]+)*)?$/'],
            },
        ],
        'vue/html-comment-content-spacing': ['warn', 'always'],
        'vue/html-comment-indent': ['warn', 4],
        'vue/match-component-file-name': [
            'warn',
            {
                extensions: ['vue'],
            },
        ],
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-reserved-component-names': 'warn',
        'vue/no-restricted-component-options': [
            'error',
            {
                name: ['watch', '$route'],
                message: 'Bad practice to watch route changing like this. Use router middleware instead.',
            },
        ],
        'vue/no-restricted-v-bind': 'warn',
        'vue/no-static-inline-styles': [
            'error',
            {
                allowBinding: false,
            },
        ],
        'vue/no-template-target-blank': 'error',
        'vue/no-unsupported-features': 'warn',
        'vue/no-unused-properties': [
            'error',
            {
                groups: [
                    'props',
                    'data',
                    'computed',
                    'methods',
                ],
                deepData: true,
            },
        ],
        'vue/no-useless-mustaches': [
            'warn',
            {
                ignoreIncludesComment: true,
                ignoreStringEscape: true,
            },
        ],
        'vue/no-useless-v-bind': 'warn',
        'vue/padding-line-between-blocks': ['warn', 'always'],
        'vue/require-direct-export': 'warn',
        'vue/require-name-property': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                switchCase: 1,
            },
        ],
        'vue/v-for-delimiter-style': ['error', 'in'],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: false,
                ignore: [
                    /* vue-accessible-color-picker events */
                    'color-change',
                ],
            },
        ],
        'vue/v-on-function-call': 'warn',

        /* Extension Rules */
        'vue/array-bracket-newline': 'error',
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'vue/camelcase': [
            'error',
            {
                properties: 'never',
            },
        ],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': 'error',
        'vue/comma-style': 'error',
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': 'error',
        'vue/eqeqeq': ['error', 'always'],
        'vue/func-call-spacing': ['error', 'never'],
        'vue/key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'vue/keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'vue/max-len': [
            'warn',
            {
                tabWidth: 4,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true,
            },
        ],
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': 'warn',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-useless-concat': 'error',
        'vue/object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true,
            },
        ],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'vue/operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'vue/prefer-template': 'error',
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': 'error',
        'vue/template-curly-spacing': ['error', 'never'],
    },
};
