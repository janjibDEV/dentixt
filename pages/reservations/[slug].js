import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
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
  });
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
      reserveInfo.email == "" ||
      reserveInfo.problem == ""
    ) {
      alert("Fill in the blank");
    } else {
      // push reservations to database
      let res = await axios
        .post("/api/server", {
          title: "Title",
          body: { ...reserveInfo, date: startDate },
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
      <div className="m-6 p-5 border h-2/6">
        <span>Selected Clinic: </span>
        <h2>{selectedClinic.name}</h2>
        <p>{selectedClinic.phone}</p>
        <p>{selectedClinic.address}</p>
      </div>
      <div className="flex justify-center flex-col items-center  h-auto">
        <form>
          <div className="flex space-around w-full">
            <div className="my-5 mx-5">
              <label className="mr-5">Name</label>
              <input
                id="name"
                className="outline-black border m-5 "
                type="text"
                value={reserveInfo.name}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="my-5 mx-5">
              <label className="mr-5">Age</label>
              <input
                id="age"
                className="outline-black border m-5 "
                type="number"
                value={reserveInfo.age}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="my-5 mx-5">
            <label className="mr-5">Email</label>
            <input
              id="email"
              className="outline-black border m-5 "
              type="email"
              value={reserveInfo.email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="my-5 flex flex-col h-30">
            <label className="">Describe your problem</label>
            <textarea
              id="problem"
              className="outline-black border my-2 h-1/2 p-3 w-1/2 "
              type="text"
              value={reserveInfo.problem}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label>Pick a date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border"
            />
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="my-5 p-5 border"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default reservation;
