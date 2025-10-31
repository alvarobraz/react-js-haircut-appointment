import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier' 
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-refresh/only-export-components": "off",
      ...reactRefresh.configs.vite.rules
    },
  },
  
  eslintConfigPrettier,
  {
      files: ['**/*.{ts,tsx}'],
      plugins: {
          prettier: eslintPluginPrettier,
      },
      rules: {
          'prettier/prettier': 'error', 
      },
  },
])