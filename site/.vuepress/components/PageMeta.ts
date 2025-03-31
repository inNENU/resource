import type { VNode } from "vue";
import { computed, defineComponent, h } from "vue";
import { usePageData } from "vuepress/client";
import AutoLink from "vuepress-theme-hope/components/AutoLink.js";
import { EditIcon } from "vuepress-theme-hope/components/icons/index.js";

import "vuepress-theme-hope/info/styles/page-meta.scss";

export default defineComponent({
  name: "PageMeta",

  setup() {
    const page = usePageData();
    const editLink = computed(() => ({
      text: "编辑此页",
      link: `https://github.com/inNENU/resource/edit/main/pages${page.value.path
        .replace(/\/$/, "/index.yml")
        .replace(/\.html$/, ".yml")}`,
    }));

    return (): VNode => {
      return h("footer", { class: "vp-page-meta" }, [
        h(
          "div",
          { class: "vp-meta-item edit-link" },
          h(
            AutoLink,
            { class: "vp-meta-label", config: editLink.value },
            { before: () => h(EditIcon) },
          ),
        ),
        h("div", { class: "vp-meta-item git-info" }, []),
      ]);
    };
  },
});
