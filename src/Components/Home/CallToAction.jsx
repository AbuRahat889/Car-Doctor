import { BsCalendarDate } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const CallToAction = () => {
  return (
    <div className="mt-20 bg-[#151515] flex justify-around py-16 rounded-xl">
      <div className="text-white flex items-center gap-2">
        <BsCalendarDate className="text-5xl" />
        <div className="text-left ">
          <h1>We are open monday-friday</h1>
          <h1 className="font-semibold">7:00 am - 9:00 pm</h1>
        </div>
      </div>

      <div className="text-white flex items-center gap-2">
        <MdWifiCalling3 className="text-5xl" />
        <div className="text-left ">
          <h1>Have a question?</h1>
          <h1 className="font-semibold">+88015123456</h1>
        </div>
      </div>
      <div className="text-white flex items-center gap-2">
        <SlLocationPin className="text-5xl" />
        <div className="text-left ">
          <h1>Need a repair? our address</h1>
          <h1 className="font-semibold">Dhaka, Bangladesh</h1>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
