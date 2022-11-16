module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'codyduong',
  ],
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        semi: ['error', 'never'],
        'prettier/prettier': [
          'error',
          {
            semi: false,
            parser: 'mdx',
          },
          {
            usePrettierrc: false,
          },
        ],
      },
    },
  ],
};