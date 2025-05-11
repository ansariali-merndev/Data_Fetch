"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

type navType = {
  label: string;
  href: string;
};

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

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
    <header className="bg-gray-800 h-[10vh] flex gap-12 items-center text-white justify-center">
      <nav className="flex gap-10">
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
      <span className="cursor-pointer" onClick={toggleTheme}>
        {isDark ? (
          <IoSunnyOutline className="w-10 h-10 px-2 py-1" />
        ) : (
          <MdOutlineDarkMode className="w-10 h-10 px-2 py-1" />
        )}
      </span>
    </header>
  );
}
