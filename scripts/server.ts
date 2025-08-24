/**
 * Combined server for inNENU resources
 *
 * Route mappings:
 * - .resource/* -> /* (default)
 * - assets/* -> /assets/*
 * - img/* -> /img/*
 * - file/* -> /file/*
 * - service/* -> res.innenu.com/service/* (proxy)
 * - .oss/*.zip -> /*.zip (direct access for zip files)
 */
import { createReadStream, existsSync, statSync } from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import { createServer } from "node:http";
import { extname, resolve } from "node:path";

const PORT = 4040;

// MIME 类型映射
const mimeTypes = new Map([
  [".html", "text/html"],
  [".css", "text/css"],
  [".js", "application/javascript"],
  [".json", "application/json"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".zip", "application/zip"],
  [".pdf", "application/pdf"],
  [".txt", "text/plain"],
]);

const getMimeType = (filePath: string): string => {
  const ext = extname(filePath).toLowerCase();

  return mimeTypes.get(ext) ?? "application/octet-stream";
};

// 代理转发函数
// 使用 fetch 实现代理转发
const proxyToService = async (
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> => {
  const targetUrl = `https://tieshi-res.shigongwei.cn${req.url}`;

  try {
    // 过滤并转换 headers
    const headers: Record<string, string> = {};

    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === "string") {
        headers[key] = value;
      } else if (Array.isArray(value)) {
        headers[key] = value.join(", ");
      }
    }

    headers.host = "tieshi-res.shigongwei.cn";

    const fetchOptions: RequestInit = {
      method: req.method ?? "GET",
      headers,
    };

    // 只有非 GET 和 HEAD 请求才设置 body
    if (req.method !== "GET" && req.method !== "HEAD") {
      let body = "";

      req.on("data", (chunk: Buffer) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        if (body) {
          fetchOptions.body = body;
        }
        sendProxyRequest(targetUrl, fetchOptions, res).catch(
          (error: unknown) => {
            console.error("代理请求失败:", error);
            res.statusCode = 500;
            res.end("代理请求失败");
          },
        );
      });
    } else {
      await sendProxyRequest(targetUrl, fetchOptions, res);
    }
  } catch (error) {
    console.error("代理请求失败:", error);
    res.statusCode = 500;
    res.end("代理请求失败");
  }
};

const sendProxyRequest = async (
  targetUrl: string,
  options: RequestInit,
  res: ServerResponse,
): Promise<void> => {
  const response = await fetch(targetUrl, options);

  // 设置响应头
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.statusCode = response.status;

  // 转发响应体
  const responseText = await response.text();

  res.end(responseText);
};

// 处理 settings.php 请求的特殊逻辑
const handleSettingsRequest = (
  req: IncomingMessage,
  res: ServerResponse,
): void => {
  // 只处理 POST 请求
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end("Method Not Allowed");

    return;
  }

  let body = "";

  req.on("data", (chunk: Buffer) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const data = JSON.parse(body) as { appId?: string; version?: string };
      const { appId, version } = data;

      if (
        !appId ||
        !version ||
        typeof appId !== "string" ||
        typeof version !== "string"
      ) {
        res.statusCode = 400;
        res.end("Missing or invalid appId or version");

        return;
      }

      // 构建本地文件路径
      const configPath = resolve(
        ".resource/config",
        appId,
        version,
        "settings.json",
      );

      // 检查文件是否存在
      if (!existsSync(configPath)) {
        res.statusCode = 404;
        res.end("error");

        return;
      }

      // 读取文件内容
      const stats = statSync(configPath);

      if (!stats.isFile()) {
        res.statusCode = 404;
        res.end("error");

        return;
      }

      // 设置响应头
      res.setHeader("Content-Type", "application/json");

      // 创建文件流并发送
      const fileStream = createReadStream(configPath);

      fileStream.pipe(res);

      fileStream.on("error", () => {
        res.statusCode = 500;
        res.end("error");
      });
    } catch (error) {
      console.error("解析 settings 请求失败:", error);
      res.statusCode = 400;
      res.end("Invalid JSON");
    }
  });
};

const server = createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400);
    res.end("Bad Request");

    return;
  }

  // 使用 URL 对象解析路径，自动处理查询参数
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // 设置 CORS 头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Cache-Control", "no-cache");

  // 处理 OPTIONS 请求
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();

    return;
  }

  let filePath: string;

  if (pathname === "/service/settings.php") {
    handleSettingsRequest(req, res);

    return;
  }

  if (pathname.startsWith("/service/")) {
    proxyToService(req, res).catch((error: unknown) => {
      console.error("代理请求失败:", error);
      res.statusCode = 500;
      res.end("代理请求失败");
    });

    return;
  }

  // 检查特殊路径映射
  if (pathname.startsWith("/assets/")) {
    const relativePath = pathname.substring("/assets/".length);

    filePath = resolve(process.cwd(), "assets", relativePath);
  } else if (pathname.startsWith("/img/")) {
    const relativePath = pathname.substring("/img/".length);

    filePath = resolve(process.cwd(), "img", relativePath);
  } else if (pathname.startsWith("/file/")) {
    const relativePath = pathname.substring("/file/".length);

    filePath = resolve(process.cwd(), "file", relativePath);
  } else {
    // 首先检查是否是 .oss 目录下的 zip 文件（直接根路径访问）
    const cleanPath = pathname.startsWith("/")
      ? pathname.substring(1)
      : pathname;

    if (cleanPath.endsWith(".zip")) {
      const ossFilePath = resolve(process.cwd(), ".oss", cleanPath);

      if (existsSync(ossFilePath)) {
        filePath = ossFilePath;
      } else {
        // 如果 .oss 中没有，尝试 .resource 目录
        filePath = resolve(process.cwd(), ".resource", cleanPath);
      }
    } else {
      // 默认从 .resource 目录托管
      filePath = resolve(process.cwd(), ".resource", cleanPath);
    }
  }

  // 检查文件是否存在
  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("File not found");

    return;
  }

  // 检查是否是目录
  const stats = statSync(filePath);

  if (stats.isDirectory()) {
    res.writeHead(403);
    res.end("Directory listing not allowed");

    return;
  }

  // 设置响应头
  const mimeType = getMimeType(filePath);

  res.setHeader("Content-Type", mimeType);
  res.setHeader("Content-Length", stats.size);

  // 创建文件流并传输
  const fileStream = createReadStream(filePath);

  fileStream.on("error", (err) => {
    console.error("File stream error:", err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  });

  fileStream.pipe(res);
});

server.listen(PORT, () => {
  console.log(`Combined server running at http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
  process.exit(1);
});
