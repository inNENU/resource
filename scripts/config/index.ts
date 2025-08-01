import "./env.js";

export const appIdInfo = {
  wx33acb831ee1831a5: process.env.WECHAT_API_KEY,
  wx2550e3fd373b79a8: process.env.WE_API_KEY,
  wx2d632391509810f8: process.env.ZAI_API_KEY,
} as Record<string, string>;

export * from "./allowedTags.js";
