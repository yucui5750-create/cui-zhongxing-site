import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "崔中行 | Cui Zhongxing",
  description:
    "崔中行的个人品牌网站，展示 AI、Codex、跨境电商、语言学习、投资认知、设计和编程方向。",
  keywords: [
    "崔中行",
    "Cui Zhongxing",
    "AI",
    "Codex",
    "Cross-border E-commerce",
    "Personal Brand"
  ],
  authors: [{ name: "Cui Zhongxing" }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
