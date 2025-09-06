"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animasi dapat muncul berulang
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main className="py-20 px-4 md:px-6 min-h-screen">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 py-20">
          <div className="space-y-6 max-w-2xl" data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Find Your Future House.
            </h1>
            <p className="text-base md:text-lg max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              minus tempore quae, magnam odit ex laborum possimus qui nemo velit
              Dolorum!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-md border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                See Now
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-md border border-gray-900 bg-gray-900 text-white hover:shadow-lg hover:shadow-zinc-400 transition-all duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div
            className="p-4 border border-gray-200 bg-white rounded-xl shadow-lg"
            data-aos="fade-left"
          >
            <Image
              alt="Discover your house"
              src="/discover.jpg"
              height={300}
              width={400}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Banner Section */}
        <section className="mt-20">
          <div
            className="mx-auto max-w-7xl py-16 text-white rounded-2xl bg-gradient-to-r from-zinc-900 to-gray-800 shadow-xl"
            data-aos="zoom-in-up"
          >
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Choose Your Dream House
              </h1>
              <p className="text-3xl md:text-4xl">⭐⭐⭐⭐⭐</p>
              <p className="text-sm md:text-base text-gray-300">
                Rated by thousands of happy homeowners across the country.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
