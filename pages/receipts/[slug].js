import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Receipt() {
  let router = useRouter();
  // slug is id for reservations
  const { slug } = router.query;
  const [receiptInfo, setReceiptInfo] = useState({});

  useEffect(() => {
    // get reservation data
    const fetchdata = async (id) => {
      let res = await axios.get("../api/server", { params: { id: id } });
      setReceiptInfo(res.data.data.body);
    };
    fetchdata(slug);
  }, []);
  return (
    <div className="m-auto p-10 flex flex-col space-between justify-center items-center">
      <h1 className="text-xl">Payment Receipt</h1>
      {receiptInfo && (
        <>
          <h1 className="my-2">{slug}</h1>
          <p className="my-2">Name: {receiptInfo.name}</p>
          <p className="my-2">Age: {receiptInfo.age}</p>
          <p className="my-2">Email: {receiptInfo.email}</p>
          <p className="my-2">Problem: {receiptInfo.problem}</p>
          <p className="my-2">Date: {receiptInfo.date}</p>
        </>
      )}
      {/* // redirect user to homepage */}
      <button className="p-3 my-3 border" onClick={() => router.push("../")}>
        Done
      </button>
    </div>
  );
}

export default Receipt;
