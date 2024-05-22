import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/App.css";
import "@/styles/Contact.css";
// import '@asseinfo/react-kanban/dist/styles.css';
// import 'styles/Plugins.css';
import "@/styles/MiniCalendar.css";
import "@/styles/index.css";
import "react-phone-input-2/lib/style.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kids Tracking",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
