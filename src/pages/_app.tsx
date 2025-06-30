import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>LinkedIn Labs - Optimize Your LinkedIn Profile</title>
        <meta
          name="description"
          content="Analyze and optimize your LinkedIn profile with AI-powered insights. Get personalized recommendations to improve your professional presence and career opportunities."
        />
        <meta
          name="keywords"
          content="LinkedIn optimization, profile analysis, career development, professional networking, AI recommendations, LinkedIn tips"
        />
        <meta name="author" content="LinkedIn Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="LinkedIn Labs - Optimize Your LinkedIn Profile"
        />
        <meta
          property="og:description"
          content="Analyze and optimize your LinkedIn profile with AI-powered insights. Get personalized recommendations to improve your professional presence."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LinkedIn Labs" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LinkedIn Labs - Optimize Your LinkedIn Profile"
        />
        <meta
          name="twitter:description"
          content="Analyze and optimize your LinkedIn profile with AI-powered insights. Get personalized recommendations to improve your professional presence."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#2563eb" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <ToastContainer />
      <div className="pt-20">
        <Component
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          {...pageProps}
        />
      </div>
    </>
  );
}
