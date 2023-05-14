import React from "react";

function About() {
  return (
    <div className="m-10">
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        What is{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          dentixt
        </span>{" "}
        ?
      </h1>{" "}
      <p className="m-3 p-2.5 text-xl">
        Our dental clinic marketplace is a one-stop platform connecting patients
        with dental clinics and practitioners. The platform offers a convenient
        and user-friendly way for patients to search for and book appointments
        with dental professionals based on their needs and preferences.
      </p>
      <p className="m-3 p-2.5 text-xl">
        Our marketplace features a wide selection of dental clinics and
        practitioners, allowing patients to compare and choose the best option
        for their dental needs. From general dentistry to specialty services,
        our platform offers a comprehensive range of dental care options for
        patients.
      </p>
      <p className="m-3 p-2.5 text-xl">
        Our marketplace also offers various features and tools to enhance the
        patient experience, such as online appointment booking, dental health
        resources, and patient reviews and ratings. With our platform, patients
        can enjoy a seamless and hassle-free dental experience from start to
        finish.
      </p>
      <p className="m-3 p-2.5 text-xl">
        For dental clinics and practitioners, our marketplace offers an
        effective way to reach new patients and grow their practice. By listing
        their services on our platform, dental professionals can increase their
        visibility and attract new patients who are looking for quality dental
        care.
      </p>
    </div>
  );
}

export default About;
