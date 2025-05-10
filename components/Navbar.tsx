"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type navType = {
  label: string;
  href: string;
};

export default function Navbar() {
  const navItem: navType[] = [
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
    { label: "Todos", href: "/todos" },
    { label: "Seq_Res", href: "/seq_res" },
    { label: "Parallel_Res", href: "/parallel_res" },
    { label: "Services", href: "/services" },
  ];
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 h-[10vh] grid items-center text-white justify-center">
      <nav className="flex gap-18">
        {navItem.map((item: navType, index: number) => (
          <span
            className={`font-semibold capitalize px-2 py-1 transition-all duration-300 ${
              pathname === item.href
                ? "border scale-105 text-indigo-600 bg-white"
                : ""
            }`}
            key={index}
          >
            <Link href={item.href}>{item.label}</Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
