import { Link, NavLink } from "react-router-dom";
import "../../../src/App.css";
import logo from "../../../src/assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "../Navbar/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut();
  }

  const nablink = (
    <div className="text-xl space-x-12">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/aboutus"}>About</NavLink>
      <NavLink to={"/allservices"}>Services</NavLink>
      <NavLink to={"/"}>Blog</NavLink>
      <NavLink to={"/"}>Contact</NavLink>
  
      {
      user ? (
        <a onClick={handleLogout} className="btn bg-[#ffbe00] text-white">
          Sign out
        </a>
      ) : (
        <NavLink to={"/signin"} className="btn bg-[#ffbe00] text-white">
          Sign in
        </NavLink>
      )}
    </div>
  );
  return (
    <div className="align">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nablink}
            </ul>
          </div>
          <Link to={"/"} className=" text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div id="nav" className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-14">{nablink}</ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <MdOutlineAddShoppingCart className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle mr-2">
            <CiSearch className="h-5 w-5" />
          </button>
          <button className="btn btn-outline btn-error">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
