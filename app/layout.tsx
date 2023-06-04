import "./globals.css";

import { initializeApp } from "firebase/app";

import { Providers } from "./providers";
import { ColorMode } from "@/components/ColorMode";

import { firebaseConfig } from "@/firebase/config";
import Content from "@/components/Content";

export const metadata = {
  title: "NextJS firebase template",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  initializeApp(firebaseConfig);

  return (
    <html lang="en">
      <body>
        <ColorMode />
        <Providers>
          <Content>{children}</Content>
        </Providers>
      </body>
    </html>
  );
}
