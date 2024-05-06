import { Link, useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const CheckOut = () => {
    const loader = useLoaderData();
  return (
    <div>
      <Helmet><title>Car Doctor | CheckOut</title></Helmet>
      <div
        className="hero h-48 rounded-lg"
        style={{
          backgroundImage: "url(https://i.ibb.co/8n3yJB5/checkout.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-40 rounded-lg"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Check Out</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={`/details/${loader._id}`}>Service Details</Link>
                </li>
                <li>
                  <Link>Check Out</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CheckOutForm loader={loader}></CheckOutForm>
    </div>
  );
};

export default CheckOut;
