import { deleteSync } from "del";
import { generateKnowledgeContent } from "innenu-generator";

import "./config/env.js";

deleteSync("./.knowledge/**");

// 生成知识库
generateKnowledgeContent("./pages", "./.knowledge");
