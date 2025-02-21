import { defaultNamingConventionRules, hope } from "eslint-config-mister-hope";
import { vue } from "eslint-config-mister-hope/vue";

export default hope(
  {
    ignores: [".oss/**", ".resource/**", ".site/**"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
  },

  ...vue({
    all: {
      "@typescript-eslint/naming-convention": [
        "warn",
        ...defaultNamingConventionRules,
        // allow locales path like `/zh/`, alias starting with `@` and css property like `line-width`
        {
          selector: ["property"],
          format: null,
          custom: {
            regex: "(^/$|^/.*/$)",
            match: true,
          },
          filter: "(^/$|^/.*/$)",
        },
      ],
    },
    sfc: {
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
          style: { lang: "scss" },
        },
      ],
    },
  }),
);
