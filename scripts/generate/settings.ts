import { readFileSync } from "node:fs";

import { getPageContent } from "innenu-generator";
import type { ComponentOptions, GridComponentItemOptions } from "innenu-generator/typings";
import { load } from "js-yaml";

const itemConfig = load(readFileSync("./config/item.yml", { encoding: "utf-8" })) as Record<
  string,
  GridComponentItemOptions
>;
const groupConfig = load(readFileSync("./config/group.yml", { encoding: "utf-8" })) as Record<
  string,
  ComponentOptions
>;

export const generateSettings = (data: unknown): unknown => {
  const {
    "main-presets": mainPresets,
    "function-presets": functionPresets,
    about,
    ...rest
  } = data as Record<string, unknown> & {
    "main-presets": Record<string, ComponentOptions[]>;
    "function-presets": Record<string, ComponentOptions[]>;
    about: ComponentOptions[];
  };

  return {
    ...rest,
    "main-presets": Object.fromEntries(
      Object.entries(mainPresets).map(([key, value]) => [
        key,
        getPageContent(
          // @ts-expect-error: TS can't infer the type of `value`
          value.map((component) => {
            const config = typeof component === "string" ? groupConfig[component] : component;

            // oxlint-disable-next-line typescript/strict-boolean-expressions
            if (!config) console.error("config is not found:", component);

            if ("items" in config) {
              return {
                ...config,
                items: config.items.map((item) =>
                  typeof item === "string" ? itemConfig[item] : item,
                ),
              };
            }

            return config;
          }),
          `settings.main-presets.${key}`,
          "pages",
        ),
      ]),
    ),
    "function-presets": Object.fromEntries(
      Object.entries(functionPresets).map(([key, value]) => [
        key,
        getPageContent(
          // @ts-expect-error: TS can't infer the type of `value`
          value.map((component) => {
            const config = typeof component === "string" ? groupConfig[component] : component;

            // oxlint-disable-next-line typescript/strict-boolean-expressions
            if (!config) console.error("config is not found:", component);

            if ("items" in config) {
              return {
                ...config,
                items: config.items.map((item) =>
                  typeof item === "string" ? itemConfig[item] : item,
                ),
              };
            }

            return config;
          }),
          `settings.function-presets.${key}`,
          "pages",
        ),
      ]),
    ),
    about: getPageContent(about, "settings.about", { id: "pages" }),
  };
};
