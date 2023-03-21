import React from "react";
import Link from "next/link";

function ClinicCard({ id, name, phone, address, zip }) {
  return (
    <div className="m-6 p-5 border h-2/6">
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{address}</p>
      <Link className="border p-1 my-3" href={`/reservations/${id}`}>
        Reserve
      </Link>
    </div>
  );
}

export default ClinicCard;
