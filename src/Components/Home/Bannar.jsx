import { Link } from "react-router-dom";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";


const Bannar = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />

        <div className="absolute flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full rounded-xl">
          <div className="text-left text-white w-1/2 pl-12 space-y-7 ">
            <h1 className="text-6xl ">Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-secondary mr-5">Secondary</button>
            <Link to={'/allservices'}>
            <button className="btn btn-outline text-[#ff3811]">Latest Project</button>
            </Link>
          </div>
        </div>

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle border-none bg-[#ff3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-left text-white w-1/2 pl-12 space-y-7">
            <h1 className="text-6xl ">Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-secondary mr-5">Secondary</button>
            <button className="btn btn-outline btn-warning">Warning</button>
          </div>
        </div>
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle border-none bg-[#ff3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-left text-white w-1/2 pl-12 space-y-7">
            <h1 className="text-6xl ">Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-secondary mr-5">Secondary</button>
            <button className="btn btn-outline btn-warning">Warning</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle border-none bg-[#ff3811]">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="text-left text-white w-1/2 pl-12 space-y-7">
            <h1 className="text-6xl ">Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-secondary mr-5">Secondary</button>
            <button className="btn btn-outline btn-warning">Warning</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
