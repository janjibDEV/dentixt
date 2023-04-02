import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Star from "./Star";

function ClinicCard({ id, name, phone, address, rating, price }) {
  const router = useRouter();
  return (
    <div className="m-6 p-5 border h-2/6 border-gray-500 flex justify-between">
      <div>
        <h2 className="">{name}</h2>
        <p>{phone}</p>
        <p>{address}</p>
        <div className="flex my-2.5">
          {Array(rating)
            .fill(1)
            .map((el, i) => (
              <Star key={i} />
            ))}
        </div>

        <button
          className="border p-3 my-2 hover:border-gray-500 rounded-full"
          onClick={() => router.push(`/reservations/${id}`)}
        >
          Reserve
        </button>
      </div>
      <div>
        <h2>Avg Price</h2>
        <p className="text-3xl font-bold text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default ClinicCard;
