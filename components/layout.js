import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";

import { Sidebar } from "flowbite-react";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>dentixt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/teeth.png" />
      </Head>
      
      
      <main className="flex">
          <Sidebar className="p-3 ">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item onClick={() => router.push("/")}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item onClick={() => router.push("../registerClinic/form")}>
                  Register Clinic
                </Sidebar.Item>
                <Sidebar.Item onClick={() => router.push("../chatbot/doctorGPT")}>
                  Dentist Bot 
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        <div className="w-full">{children}</div></main>
      {/* <Footer /> */}
    </>
  );
}
