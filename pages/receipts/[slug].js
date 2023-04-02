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
      setReceiptInfo(res.data.data);
    };
    fetchdata(slug);
  }, []);
  return (
    <div className="m-auto p-10 ">
      <h1 className="text-4xl my-5">dentixt</h1>
      <h1 className="text-4xl">Payment Receipt</h1>
      <hr />
      {receiptInfo && (
        <>
          <div className="my-5">
            <h4>For: </h4>
            <p>{receiptInfo.name}</p>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-white border-gray-500 border">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Order ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Clinic
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-700 border">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                  >
                    {slug}
                  </th>
                  <td class="px-6 py-4 text-gray-900">{receiptInfo.clinic}</td>
                  <td class="px-6 py-4 text-gray-900">${receiptInfo.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="my-5">
        <button
          className="border border-gray-500 p-2.5 rounded-lg text-sm hover:bg-gray-100 m-2"
          onClick={() => window.print()}
        >
          Print
        </button>
        {/* // redirect user to homepage */}
        <button
          className="border border-gray-500 p-2.5 rounded-lg text-sm hover:bg-gray-100 m-2"
          onClick={() => router.push("../")}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Receipt;
