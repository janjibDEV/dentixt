import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
// import "@/styles/Home.module.css";
// const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [zipCode, setZipCode] = useState();
  const router = useRouter();
  return (
    <>
      <main className="my-10 ">
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
          <div className="m-10">
            <label>Enter your post code: </label>
            <input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="16801"
              className="m-10 appearance-none border border-gray-300 p-3 rounded-full dark:focus:border-gray-500 focus:outline-none"
              type="number"
            />
          </div>
          <button
            disabled={!zipCode}
            className={`border p-5 rounded-full border-gray-300 dark:focus:border-gray-500 focus:outline-none hover:border-gray-500 ${
              !zipCode ? "cursor-not-allowed" : ""
            }`}
            onClick={() => router.push(`/clinics/${zipCode}`)}
          >
            Book your reservation now!{" "}
          </button>
        </div>
      </main>
    </>
  );
}
