import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "材质管理器系统",
  description: "基于QT风格设计的材质管理器系统前端展示Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}

