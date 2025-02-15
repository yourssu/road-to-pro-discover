// @ts-nocheck

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  {
    files: ["**/*.{astro,mts,cts,tsx,mtsx}"],
    ...tseslint.configs.recommended,
  },
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react.configs.flat.recommended,
    ...react.configs.flat["jsx-runtime"],
    ...reactCompiler.configs.recommended,
  },
  prettier,
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".astro"],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
