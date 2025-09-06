"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // biar bisa muncul berulang
    });

    // Refresh AOS setiap kali scroll supaya animasi muncul lagi
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <Navbar />
      <main className="py-30 px-4 md:px-0 min-h-screen">
        {/* hero */}
        <section className="mx-auto max-w-7xl py-30 flex items-center justify-between">
          <div className=" space-y-6" data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl lg:text-7xl young">
              Find Your Future House.
            </h1>
            <p className="max-w-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              minus tempore quae, magnam odit ex laborum possimus qui nemo velit
              Dolorum!
            </p>
            <div className="flex items-center gap-2">
              <a
                href=""
                className="px-5 py-2 rounded-sm border border-black hover:bg-black hover:text-white  duration-300 transition-all"
              >
                See Now
              </a>
              <a
                href=""
                className="hover:shadow-lg hover:shadow-zinc-400 duration-300 transition-all px-5 py-2 rounded-sm border border-black bg-black text-white "
              >
                Bought Now
              </a>
            </div>
          </div>
          <div
            className="p-2 border bg-gray-950 rounded-xl shadow-xl shadow-zinc-400"
            data-aos="fade-left"
          >
            <Image
              alt="discover"
              src={"/discover.jpg"}
              height={300}
              width={800}
              className="rounded-xl"
            />
          </div>
        </section>
        {/* banner */}
        <section className="mt-30">
          <div
            className="mx-auto max-w-7xl py-30 text-white shadow-xl shadow-gray-300 rounded-2xl bg-zinc-950"
            data-aos="zoom-in-up"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl young">
                Choose Your Dream House
              </h1>
              <p className="text-4xl">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
