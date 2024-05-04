import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <div
        className="hero h-48 rounded-lg"
        style={{
          backgroundImage: "url(https://i.ibb.co/xJgDkL8/person.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>Abour</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AboutUs;