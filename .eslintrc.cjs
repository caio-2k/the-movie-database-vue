module.exports = {
  extends: ["plugin:vue/vue3-essential", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
    "comma-dangle": ["error", "always-multiline"],
  },
  overrides: [
    {
      files: ["src/**/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};
