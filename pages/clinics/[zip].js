import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ClinicCard from "@/components/ClinicCard";

export default function Clinic() {
  let router = useRouter();
  // zip is postcode
  const { zip } = router.query;
  const [listClinics, setListClinics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get clinics in the area based on zipcode
    const fetchdata = async (id) => {
      let res = await axios.get("../api/clinic", { params: { zip: zip } });
      setListClinics(res.data.data);
    };
    setLoading(true);
    fetchdata(zip);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <p className="m-6">Results: {listClinics.length} found</p>
      )}

      {listClinics &&
        listClinics.map((clinic) => (
          <ClinicCard
            key={clinic._id}
            id={clinic._id}
            name={clinic.name}
            phone={clinic.phone}
            address={clinic.address}
            rating={clinic.rating}
            price={clinic.price}
            zip={clinic.zip}
          />
        ))}
    </>
  );
}
