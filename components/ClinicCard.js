import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Star from "./Star";
import Unstar from "./Unstar";

function ClinicCard({ id, name, phone, address, rating, price, review }) {
  const router = useRouter();
  const [seeReview, setSeeReview] = useState(false);
  return (
    <div className="m-6 p-5 border h-2/6 shadow border-gray-500 flex justify-between">
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
          {Array(5 - rating)
            .fill(1)
            .map((el, i) => (
              <Unstar key={i} />
            ))}
        </div>

        <button
          className="border p-3 my-2 hover:border-gray-500 rounded-full"
          onClick={() => router.push(`/reservations/${id}`)}
        >
          Reserve
        </button>
        <div>
          <button onClick={() => setSeeReview(!seeReview)}>
            {seeReview ? "Close review <" : "See Review >"}
          </button>
          {review && seeReview && <p className="m-5">"{review}"</p>}
        </div>
      </div>
      <div>
        <h2>Average Price</h2>
        <p className="text-3xl font-bold text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default ClinicCard;
