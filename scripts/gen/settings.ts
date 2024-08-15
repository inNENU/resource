import { readFileSync } from "node:fs";

import { load } from "js-yaml";

import { resolvePageContent } from "../components/page.js";
import type {
  ComponentOptions,
  GridComponentItemOptions,
} from "../components/typings.js";

const itemConfig = load(
  readFileSync("./config/item.yml", { encoding: "utf-8" }),
) as Record<string, GridComponentItemOptions>;
const groupConfig = load(
  readFileSync("./config/group.yml", { encoding: "utf-8" }),
) as Record<string, ComponentOptions>;

export const generateSettings = (data: unknown): unknown => {
  const {
    "main-presets": mainPresets,
    "function-presets": functionPresets,
    about,
    ...rest
  } = data as Record<string, unknown> & {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "main-presets": Record<string, ComponentOptions[]>;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "function-presets": Record<string, ComponentOptions[]>;
    about: ComponentOptions[];
  };

  const convertedFunctionPresets = Object.fromEntries(
    Object.entries(functionPresets).map(([key, value]) => [
      key,
      resolvePageContent(
        // @ts-expect-error: TS can't infer the type of `value`
        value.map((component) => {
          const config =
            typeof component === "string" ? groupConfig[component] : component;

          if ("items" in config)
            return {
              ...config,
              items: config.items.map((item) =>
                typeof item === "string" ? itemConfig[item] : item,
              ),
            };

          return config;
        }),
        `settings.function-presets.${key}`,
        "pages",
      ),
    ]),
  );

  return {
    ...rest,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "main-presets": Object.fromEntries(
      Object.entries(mainPresets).map(([key, value]) => [
        key,
        resolvePageContent(value, `settings.main-presets.${key}`, "pages"),
      ]),
    ),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "function-presets": convertedFunctionPresets,
    about: resolvePageContent(about, "settings.about", "pages"),
  };
};