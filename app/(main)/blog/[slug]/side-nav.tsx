"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const tableContent = [
  { title: "Introduction", href: "#introduction" },
  {
    title: "Centering with auto margins",
    href: "#centering-with-auto-margins-1",
  },
];

export const SideNav = () => {
  const param = useParams();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.hash);
  }, [param]);

  return (
    <aside className="basis-1/4 sticky top-20">
      <h3 className="uppercase tracking-widest">TABLE OF CONTENTS</h3>
      <ul className="flex flex-col">
        {tableContent.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              "mt-3 text-muted-foreground hover:text-foreground transition-colors",
              url === item.href ? "text-blue-600 hover:text-blue-600" : ""
            )}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </aside>
  );
};
