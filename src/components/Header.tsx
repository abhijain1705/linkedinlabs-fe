/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

type HeaderProps = {
  onToggleSidebar?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const router = useRouter();

  // hide hamburger on home
  const isHome = router.pathname === "/";

  return (
    <header className="w-full z-[100] px-6 fixed py-4 flex items-center justify-between bg-white shadow-sm">
      {/* Left Side: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        {/* Show hamburger ONLY if not on home page AND handler exists */}
        {!isHome && onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-xl text-gray-700"
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        )}

        {/* Logo */}
        <Link href="/">
          <div className="rounded-lg p-1">
            <img
              alt="logo"
              src="/logo.png"
              className="w-[100px] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Center Links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="/#faq" className="hover:text-black transition">
          FAQ
        </a>
        <a href="/#features" className="hover:text-black transition">
          Features
        </a>
      </nav>

      {/* CTA Button */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <a
          href="#analyze-button"
          className="bg-black text-white px-4 py-2 rounded-md font-semibold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] transition-transform"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
