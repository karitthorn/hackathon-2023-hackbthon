import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "400",
  subsets: ["thai"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>KU2.0</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={prompt.className}>
      <div className="hidden md:block md:text-2xl">🚧 กรุณาเปิดใน emulated หรือ เปิดเว็ปนี้ผ่านมือถือของท่าน 🚧</div>
        <div className="md:invisible">{children}</div>
      </body>
    </html>
  );
}
