import "./globals.css";

import { Providers } from "./providers";
import { ColorMode } from "@/components/ColorMode";

export const metadata = {
  title: "NextJS firebase template",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorMode />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
