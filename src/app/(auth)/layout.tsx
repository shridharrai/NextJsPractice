"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/login", name: "Login" },
  { href: "/register", name: "Register" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="m-4 px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
