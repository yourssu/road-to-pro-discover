/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "at-rule-no-deprecated": [
      true,
      {
        ignoreAtRules: ["apply", "variants", "responsive", "screen", "theme"],
      },
    ],
  },
};
