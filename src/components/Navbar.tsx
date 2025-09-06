"use client";
import { LucideMenu, LucideX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white/70 backdrop-blur-lg w-full py-2 fixed top-0 left-0 ">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-0">
          <div className="">
            <a href="">Spark.</a>
          </div>

          <nav className="hidden md:flex items-center gap-4 ">
            <Link href={""}>Home</Link>
            <Link href={""}>Articles</Link>
            <Link href={""}>Privacy</Link>
            <Link href={""}>Letters</Link>
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
                <Link href={""}>Home</Link>
                <Link href={""}>Articles</Link>
                <Link href={""}>Privacy</Link>
                <Link href={""}>Letters</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
