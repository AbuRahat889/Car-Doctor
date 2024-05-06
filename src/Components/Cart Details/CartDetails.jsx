import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import Swal from "sweetalert2";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  //   console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/checkout?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, []);

  //handle delete button
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/checkout/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const reaming = cart.filter((carted) => carted._id !== id);
              setCart(reaming);
            }
          });
      }
    });
  };

  return (
    <div>
      {cart.map((cartInfo) => (
        <div key={cart._id}>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th>
                    {/* delete button  */}
                    <button
                      onClick={() => handleDelete(cartInfo._id)}
                      className="btn btn-sm btn-circle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-24 rounded-xl">
                          <img src={cartInfo.img} />
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">{cartInfo.title}</div>
                        <div className="text-sm opacity-50">
                          {cartInfo.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cartInfo.price}</td>
                  <td>{cartInfo.date}</td>
                  <th>
                    <button className="btn btn-ghost bg-[#ff3811] text-white">
                      Pending
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;
