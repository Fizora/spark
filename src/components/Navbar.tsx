"use client";
import { LucideMenu, LucideX } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Discover", href: "#discover" },
    { name: "Category", href: "#category" },
    { name: "Policy", href: "#policy" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <>
      <header
        className="bg-white/70 backdrop-blur-lg w-full py-2 fixed top-0 left-0"
        data-aos="fade-down"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-0">
          <div className="young text-xl">
            <a href="">
              S<span className="text-white bg-black">park.</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-4 ">
            {navItems.map((item) => (
              <>
                <a href={item.href}>{item.name}</a>
              </>
            ))}
          </nav>

          <button
            className="md:hidden border border-gray-800 rounded-sm p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <LucideX /> : <LucideMenu />}
          </button>

          {open && (
            <div className="md:hidden absolute left-0 top-0 w-full px-4 bg-white h-screen">
              <div className="flex items-center justify-end py-2 w-full">
                <button
                  className="md:hidden border border-gray-800 rounded-sm p-2"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <LucideX /> : <LucideMenu />}
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <>
                    <a href={item.href}>{item.name}</a>
                  </>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
