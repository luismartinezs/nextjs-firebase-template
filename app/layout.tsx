import "./globals.css";

import { initializeApp } from "firebase/app";

import { Providers } from "./providers";
import { ColorMode } from "@/components/ColorMode";

import { firebaseConfig } from "@/firebase/config";

export const metadata = {
  title: "NextJS firebase template",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebaseApp = initializeApp(firebaseConfig);

  return (
    <html lang="en">
      <body>
        <ColorMode />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
