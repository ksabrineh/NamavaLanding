import Providers from "@/tools/Providers";
import "./globals.css";

export const metadata = {
  title: "Namava Landing",
  description: "Next.js Namava Landing",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" dir="rtl">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
