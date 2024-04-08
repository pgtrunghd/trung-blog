import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-14 backdrop-blur bg-background/60">
      <div className="flex items-center justify-between h-full container max-w-screen-xl">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl mr-8 text-muted-foreground font-medium"
          >
            <span className="text-foreground">Trung</span>
            <span className="text-blue-600">Pham</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm capitalize text-foreground font-semibold">
            <Link href="/">about</Link>
            <Link href="/blog">blog</Link>
          </nav>
        </div>

        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
