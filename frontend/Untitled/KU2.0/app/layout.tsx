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
        <div>
          <div className="md:flex md:justify-center md:items-center">
            <div className=" w-screen h-screen md:w-96 md:h-96 ">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
