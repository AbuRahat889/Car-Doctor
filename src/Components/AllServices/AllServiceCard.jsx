import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllServiceCard = () => {
  const [loader, setLoader] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services").then((res) =>
      res.json().then((data) => setLoader(data))
    );
  }, []);

  const { _id, img, title, price } = loader;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {loader.map((load) => (
        <div key={loader._id}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img src={load.img} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title text-2xl font-bold">{load.title}</h2>
              <div className="flex justify-end">
                <p className="text-error text-xl font-bold flex items-center gap-2">
                  <IoPricetag />${load.price}
                </p>
                <Link to={`/details/${load._id}`}>
                  <FaArrowRightLong className="text-2xl text-error" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServiceCard;
