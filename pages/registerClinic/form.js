import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Alert from "@/components/Alert";

function form() {
  const router = useRouter();
  const [clinicInfo, setClinicInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    price: 0,
    rating: 0,
    review: [],
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    if (e.target.id == "name") {
      setClinicInfo({ ...clinicInfo, name: e.target.value });
    } else if (e.target.id == "phone") {
      setClinicInfo({ ...clinicInfo, phone: e.target.value });
    } else if (e.target.id == "email") {
      setClinicInfo({ ...clinicInfo, email: e.target.value });
    } else if (e.target.id == "address") {
      setClinicInfo({ ...clinicInfo, address: e.target.value });
    } else if (e.target.id == "price") {
      setClinicInfo({ ...clinicInfo, price: e.target.value });
    } else {
      setClinicInfo({ ...clinicInfo, zip: e.target.value });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      clinicInfo.name == "" ||
      clinicInfo.phone == "" ||
      clinicInfo.zip == "" ||
      clinicInfo.address == "" ||
      clinicInfo.email == "" ||
      clinicInfo.price == 0
    ) {
      setError(true);
    } else {
      // push reservations to database
      let res = await axios
        .post("/api/clinic", clinicInfo)
        // redirect user to receipt page
        .then((result) => router.push("./successRegister"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {error && <Alert />}
      <form className="m-10 p-10">
        {/*  */}
        <h1 className="my-5 text-2xl">
          Fill in the form below to register your clinic
        </h1>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
            placeholder="Your name"
            value={clinicInfo.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="age"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
              required
              value={clinicInfo.phone}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
              required
              value={clinicInfo.email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Address
          </label>
          <textarea
            id="address"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border dark:focus:border-gray-500 focus:outline-none"
            placeholder="Address"
            value={clinicInfo.address}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="age"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Zipcode
            </label>
            <input
              type="number"
              id="zipcode"
              class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
              required
              value={clinicInfo.zip}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
              required
              value={clinicInfo.price}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div class="flex items-start my-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          class="border border-gray-500 p-2.5 rounded-lg text-sm hover:bg-gray-100"
          onClick={(e) => handleClick(e)}
          value="Submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default form;
