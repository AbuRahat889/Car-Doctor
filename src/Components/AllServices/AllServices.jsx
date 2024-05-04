import { Link } from "react-router-dom";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  return (
    <div>
      <div
        className="hero h-48 rounded-lg"
        style={{
          backgroundImage: "url(https://i.ibb.co/8n3yJB5/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">All Service </h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>All Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     <AllServiceCard></AllServiceCard>
    </div>
  );
};

export default AllServices;
