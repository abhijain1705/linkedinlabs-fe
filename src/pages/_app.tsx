import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Component
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        {...pageProps}
      />
    </>
  );
}
