import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import About from "@/components/About";
// import "@/styles/Home.module.css";
// const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [zipCode, setZipCode] = useState();
  const router = useRouter();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      event.preventDefault();
      router.push(`/clinics/${zipCode}`);
    }
  };
  return (
    <>
      <main className="my-5 ">
        <div className="flex justify-center flex-col items-center">
          <Link
            href="/"
            className="text-7xl mx-auto max-w-sm text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            dentixt
          </Link>
          <Image
            src="/mouth.png"
            height="350"
            width="350"
            alt="An image of teeth"
            className="m-10"
          />
          <p className="text-lg m-3">
            Smile brighter with a cheaper dental treatment
          </p>
          <button
            className={`border m-6 p-2.5 rounded-full border-gray-300 dark:focus:border-gray-500 focus:outline-none hover:border-gray-500`}
            href="#about"
            onClick={() => router.push("/#about")}
          >
            What is dentixt ?
          </button>
          <div className="m-5 flex justify-center items-center flex-col">
            <p className="text-center text-gray-500 m-2.5">
              Enter your zipcode to get started
            </p>
            <input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="16801"
              className="mb-10 appearance-none border border-gray-300 p-3 rounded-full dark:focus:border-gray-500 focus:outline-none"
              type="number"
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>

          <section
            className="m-10  flex flex-col justify-center items-center"
            id="about"
          >
            <About />
            <button
              className={`border  p-2.5 rounded-full border-gray-300 dark:focus:border-gray-500 focus:outline-none hover:border-gray-500`}
              href="#about"
              onClick={() => router.push("/")}
            >
              Back
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
