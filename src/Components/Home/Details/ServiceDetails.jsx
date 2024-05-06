import { Link } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { Helmet } from "react-helmet-async";
const ServiceDetails = () => {
  
//   console.log(loader);

  return (
    <div>
      <Helmet><title>Car Doctor | Details</title></Helmet>
      <div
        className="hero h-48 rounded-lg"
        style={{
          backgroundImage: "url(https://i.ibb.co/mqr0VHp/background-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-lg"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <DetailsCard></DetailsCard>
    </div>
  );
};

export default ServiceDetails;
