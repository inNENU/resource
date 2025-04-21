import { deleteSync } from "del";
import { generateKnowledgeBase } from "innenu-generator";

deleteSync("./.knowledge/**");

// 生成知识库
generateKnowledgeBase("./pages", "./.knowledge");
