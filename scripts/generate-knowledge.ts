import { deleteSync } from "del";
import { config, generateKnowledgeContent } from "innenu-generator";

config({
  assets: "https://assets.innenu.com",
  icon: "",
  mapFolder: "",
  mapKey: "",
  pageFolder: "./pages",
});

deleteSync("./.knowledge/**");

// 生成知识库
generateKnowledgeContent("./pages", "./.knowledge");
