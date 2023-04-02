import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Star from "@/components/Star";
import Alert from "@/components/Alert";
function reservation() {
  let router = useRouter();
  // slug is the id of clinic selected
  let { slug } = router.query;
  const [startDate, setStartDate] = useState(new Date());
  const [reserveInfo, setReserveInfo] = useState({
    name: "",
    age: 0,
    email: "",
    problem: "",
    date: startDate,
  });
  const [selectedClinic, setSelectedClinic] = useState({
    name: "",
    phone: "",
    address: "",
    rating: 0,
    price: 0,
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    if (e.target.id == "name") {
      setReserveInfo({ ...reserveInfo, name: e.target.value });
    } else if (e.target.id == "age") {
      setReserveInfo({ ...reserveInfo, age: e.target.value });
    } else if (e.target.id == "email") {
      setReserveInfo({ ...reserveInfo, email: e.target.value });
    } else {
      setReserveInfo({ ...reserveInfo, problem: e.target.value });
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (
      reserveInfo.name == "" ||
      reserveInfo.age == 0 ||
      reserveInfo.email == ""
    ) {
      setError(true);
    } else {
      // push reservations to database
      let res = await axios
        .post("/api/server", {
          ...reserveInfo,
          date: startDate,
          clinic: selectedClinic.name,
          price: selectedClinic.price,
        })
        // redirect user to receipt page
        .then((result) => router.push(`/receipts/${result.data}`))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    // get fata for selected clinic
    const fetchdata = async (id) => {
      let res = await axios.get("../api/getOneClinic", { params: { id: id } });
      console.log(res.data.data);
      setSelectedClinic(res.data.data);
      //   console.log(res);
    };
    fetchdata(slug);
  }, []);

  return (
    <>
      {error && <Alert />}
      <button
        className={`border m-6 p-5 rounded-full border-gray-300 dark:focus:border-gray-500 focus:outline-none hover:border-gray-500`}
        onClick={() => router.back()}
      >
        Back
      </button>
      <p className="m-6">Selected Clinic: </p>
      <div className="m-6 p-5 border h-2/6 border-gray-500 flex justify-between">
        <div>
          <h2 className="">{selectedClinic.name}</h2>
          <p>{selectedClinic.phone}</p>
          <p>{selectedClinic.address}</p>
          <div className="flex my-2.5">
            {Array(selectedClinic.rating)
              .fill(1)
              .map((el, i) => (
                <Star key={i} />
              ))}
          </div>
        </div>
        <div>
          <h2>Avg Price</h2>
          <p className="text-3xl font-bold text-gray-900">
            ${selectedClinic.price}
          </p>
        </div>
      </div>

      <form className="m-10 p-10">
        <h1 className="my-5 text-2xl">
          Fill in the form below to confirm your reservations
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
            value={reserveInfo.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="age"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              class="bg-white border text-sm rounded-lg block w-full p-2.5 dark:focus:border-gray-500 focus:outline-none"
              required
              value={reserveInfo.age}
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
              value={reserveInfo.email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Describe your dental problem
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border dark:focus:border-gray-500 focus:outline-none"
            placeholder="Write your problem here..."
            value={reserveInfo.problem}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>
        <div>
          <label>Pick a date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="block p-2.5 w-1/2 text-sm text-gray-900 bg-white rounded-lg border dark:focus:border-gray-500 focus:outline-none"
          />
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

export default reservation;
