import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const Service = () => {
  const [loader, setLoader] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services").then((res) =>
      res.json().then((data) => setLoader(data))
    );
  }, []);
  
  return (
    <div>
      <div className="mt-20  flex justify-center">
        <div className="w-1/2 ">
          <h1 className="text-error text-xl font-semibold">Service</h1>
          <h1 className="text-5xl font-bold ">Our Service Area</h1>
          <p className="text-lg mt-2">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {loader.map((load) => (
          <ServicesCard key={loader._id} load={load}></ServicesCard>
        ))}
      </div>
      <Link>
        <button className="mt-10 btn btn-outline btn-error">More Services</button>
      </Link>
    </div>
  );
};

export default Service;
