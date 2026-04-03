// oxlint-disable node/no-process-env
// oxlint-disable no-await-in-loop
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

import "./config/env.js";

const RESOURCE_DIR = ".resource";
const FOLDERS_TO_COPY = ["apartment", "guide", "intro", "icon", "newcomer", "school"];

/**
 * 递归复制文件夹
 * @param src - 源文件夹路径
 * @param dest - 目标文件夹路径
 */
const copyDirectory = async (src: string, dest: string): Promise<void> => {
  // 确保目标文件夹存在
  await mkdir(dest, { recursive: true });

  // 读取源文件夹内容
  const entries = await readdir(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    const stats = await stat(srcPath);

    await (stats.isDirectory() ? copyDirectory : copyFile)(srcPath, destPath);
  }
};

/**
 * 主函数
 */
const main = async (): Promise<void> => {
  // 检查 MINIPROGRAM_STORAGE 环境变量
  const storageDir = process.env.MINIPROGRAM_STORAGE;

  if (!storageDir || storageDir.trim() === "") {
    console.error("警告: 未找到 MINIPROGRAM_STORAGE 环境变量或该变量为空");
    console.error("请在 .env 文件中设置 MINIPROGRAM_STORAGE 变量，指向目标存储文件夹");
    process.exit(1);
  }

  // 在路径后追加 usr/
  const targetDir = join(storageDir, "usr");

  try {
    // 检查目标目录是否存在，不存在则报错
    await stat(targetDir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.error(`错误: 目标路径不存在: ${targetDir}`);
      process.exit(1);
    }
    throw err;
  }

  try {
    // 复制每个指定的文件夹
    for (const folder of FOLDERS_TO_COPY) {
      const srcPath = join(RESOURCE_DIR, folder);
      const destPath = join(targetDir, folder);

      // 检查源文件夹是否存在
      try {
        await stat(srcPath);
      } catch (err) {
        if ((err as NodeJS.ErrnoException).code === "ENOENT") {
          console.error(`错误: 源文件夹不存在: ${srcPath}`);
          process.exit(1);
        }
        throw err;
      }

      await copyDirectory(srcPath, destPath);
    }

    console.log("文件复制完成");
  } catch (err) {
    console.error("复制过程中发生错误:", err);
    process.exit(1);
  }
};

// 运行主函数
try {
  await main();
} catch (err) {
  console.error("脚本执行失败:", err);
  process.exit(1);
}
