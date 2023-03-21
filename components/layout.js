import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      {/* navbar */}
      <nav className="w-full p-3 flex flex-row space-between">
        <div className="basis-1/2">
          <Link href="/" className="text-xl">
            dentixt
          </Link>
        </div>
        <div className="basis-1/2 flex flex-row justify-end">
          {" "}
          <button className="border p-2">Register your clinic</button>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
