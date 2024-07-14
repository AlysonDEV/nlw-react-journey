module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', require('prettier-plugin-tailwindcss')],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'never'], // Adicione esta linha para desativar os pontos e vírgulas
    'max-len': ['alert', { code: 80, ignoreUrls: true }], // Regra para comprimento máximo da linha
  },
  tailwindFunctions: ['tv']
}
