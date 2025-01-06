import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Toaster } from "@/components/ui/toaster";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.meta_og_image || ""],
    },
    icons: {
      icon: "/olive.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-slate-900 text-slate-100 scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-slate-700"
    >
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Header />
        <SpeedInsights/>
        {children}
        <Footer />
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
        <Toaster />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
