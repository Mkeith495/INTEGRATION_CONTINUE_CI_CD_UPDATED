import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
    {
        ignores: [
            'node_modules/',
            'build/',
            'coverage/',
            '*.config.js',
            'jest.config.js',
            'babel.config.js'
        ]
    },
    {
        files: ['**/*.ts'],
        extends: [tseslint.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            },
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        plugins: {
            prettier: prettierPlugin
        },
        rules: {
            'prettier/prettier': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_|error'
                }
            ],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off'
        }
    }
);
