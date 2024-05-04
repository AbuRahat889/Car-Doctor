import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import img from "../../../assets/logo3.png";

const DetailsCard = () => {
  const loader = useLoaderData();
  return (
    <div>
      <div className="mt-10 card card-side py-10 flex">
        <figure className="flex-1">
          <img src={loader.img} alt="Movie" className="h-96" />
        </figure>

        <div className="border ml-16 card  bg-slate-300 w-80 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Services</h2>

            <div className="bg-white hover:bg-[#ff3811] hover:text-white text-left p-2 px-5 rounded-md flex items-center justify-between">
              <h1 className=" font-semibold ">Full Car Repair</h1>
              <FaArrowRightLong />
            </div>
            <div className="bg-white hover:bg-[#ff3811] hover:text-white text-left p-2 px-5 rounded-md flex items-center justify-between">
              <h1 className=" font-semibold ">Engine Repair</h1>
              <FaArrowRightLong />
            </div>
            <div className="bg-white hover:bg-[#ff3811] hover:text-white text-left p-2 px-5 rounded-md flex items-center justify-between">
              <h1 className=" font-semibold ">Automatic Services</h1>
              <FaArrowRightLong />
            </div>
            <div className="bg-white hover:bg-[#ff3811] hover:text-white text-left p-2 px-5 rounded-md flex items-center justify-between">
              <h1 className=" font-semibold ">Engine Oil Change</h1>
              <FaArrowRightLong />
            </div>
            <div className="bg-white hover:bg-[#ff3811] hover:text-white text-left p-2 px-5 rounded-md flex items-center justify-between">
              <h1 className=" font-semibold ">Battery Charge</h1>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="text-left flex-1">
          <h1 className="text-3xl font-bold ">{loader.title}</h1>
          <p className="mt-4">{loader.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-5">
            {loader.facility.map((load) => (
              <div key={loader._id}>
                <div className="card w-96 bg-[#F3F3F3] border-t-2 border-error">
                  <div className="card-body">
                    <h2 className="card-title font-semibold">{load.name}</h2>
                    <p>{load.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-[#151515] rounded-md mt-10 px-8 py-10 text-white text-left">
            <h1 className="text-xl font-semibold">Downloade</h1>
            <div className="flex items-center">
              <FaFileAlt className="text-2xl" />
              <h1 className="textarea-md font-semibold">
                Our Brochure
                <p className="text-sm -mt-2 font-extralight">Download</p>
              </h1>
              <div className="ml-10  p-1 bg-[#ff3811] rounded-md">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex items-center">
              <FaFileAlt className="text-2xl" />
              <h1 className="textarea-md font-semibold">
                Our Brochure
                <p className="text-sm -mt-2 font-extralight">Download</p>
              </h1>
              <div className="ml-10  p-1 bg-orange-600 rounded-md">
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          <div className="bg-[#151515] rounded-md mt-10 px-8 py-10 text-center  text-white">
            <div className="text-center flex justify-center">
              <img src={img} alt="" className=" " />
            </div>
            <h1 className="text-white text-xl font-bold">Car Doctor</h1>
            <h1 className="text-white text-xl font-bold mt-8">
              Need Help? We Are Here <br />
              To Help You
            </h1>
            <div className="bg-white text-black p-8 pb-10 mt-4 rounded-md">
              <h1 className="text-2xl font-bold">
                <span className="text-[#ff3811]">Car Doctor</span> Special
              </h1>
              <h1 className="text-xl font-bold ">
                Save up to <span className="text-[#ff3811] ">60% off</span>
              </h1>
            </div>
            <button className="btn bg-[#ff3811] text-white border-none -mt-4">
              Get A Quote
            </button>
          </div>

          <div className="text-left mt-4">
            <h1 className="text-4xl font-bold">price: ${loader.price} </h1>
            <Link to={`/checkout`}>
              <button className="btn bg-[#ff3811] mt-4 text-white px-28">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
