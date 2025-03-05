import { ThemeProvider } from "@/components/providers/theme-provider";
import { ChildProps } from "@/types";
import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const creteRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creteRound",
});
const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://test-blog.sammi.ac"),
  title: "Sammi dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.",
  authors: [{ name: "Ozodbek Kasimov", url: "https://sammi.ac" }],
  icons: { icon: "/favicon.png" },
  keywords: "cms blog test, hygraph, next js, react js, sammi, bloglar",
  openGraph: {
    title: "Sammi dasturlashga oid maqolalar",
    description:
      "Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.",
    type: "website",
    url: "https://test-blog.sammi.ac",
    locale: "en_EN",
    images: "https://media.graphassets.com/kXL006lyRnW46IKTHdHs",
    countryName: "Uzbekistan",
    siteName: "Sammi",
    emails: "info@sammi.ac",
  },
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
