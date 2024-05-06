import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provaider/AuthProvider";

const CheckOutForm = ({ loader }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, price } = loader;

  const handleCheckOut = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const phone = form.phone.value;

    const checkoutInfo = {
      name,
      email,
      date,
      phone,
      title,
      img,
      price,
    };

    console.log(checkoutInfo);

    //post data in server
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You order Confirm!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <div className="bg-[#F4F3F0] p-24 align">
        <h2 className="text-3xl font-extrabold">Check Out</h2>
        <form onSubmit={handleCheckOut} className="px-10 mt-5">
          {/* form name and quantity row */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form location row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="phone"
                  placeholder="phone"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-block bg-[#ff3811] text-white font-semibold text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
