import { defineClientConfig } from "vuepress/client";

import { setupAccount } from "./composables/index.js";
import Layout from "./layouts/Layout.vue";

export default defineClientConfig({
  setup() {
    setupAccount();
  },
  layouts: {
    Layout,
  },
});
