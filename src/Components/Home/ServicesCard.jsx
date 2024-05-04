import { IoPricetag } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCard = ({ load }) => {
  const {_id, img, title, price } = load;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={img} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex justify-end">
            <p className="text-error text-xl font-bold flex items-center gap-2">
              <IoPricetag />${price}
            </p>
            <Link to={`/details/${_id}`}>
              <FaArrowRightLong className="text-2xl text-error" />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesCard;
