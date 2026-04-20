import { defineHopeConfig } from "oxc-config-hope/oxlint";

export default defineHopeConfig({
  ignore: [".oss/**", ".resource/**", ".site/**"],
  node: true,
  rules: {
    "no-console": "off",
    "import/no-unassigned-import": ["warn", { allow: ["**/env.js", "**/*.css"] }],
    "unicorn/no-process-exit": "off",
  },
});
