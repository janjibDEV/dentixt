import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function successRegister() {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-col items-center">
      <Image src="/checkmark.svg" width="100" height="100" className="m-5" />
      <h1 className="m-5">Thanks for registering your clinic with us!</h1>
      <button
        type="submit"
        className="border border-gray-500 p-2.5 rounded-lg text-sm hover:bg-gray-100 m-5"
        onClick={() => router.push("../")}
        value="Submit"
      >
        Return to homepage
      </button>
    </div>
  );
}

export default successRegister;
