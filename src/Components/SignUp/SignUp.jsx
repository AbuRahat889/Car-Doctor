import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FireBase/FireBase.config";

const signUp = () => {
  const auth = getAuth(app);
  const { createUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  //sign up gmail and password
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, password);
    // console.log(name);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };

  //sign up using google
  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        // alert(error)
      });
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="w-1/2 mr-20">
            <img src={img} alt="" />
          </div>

          <div className="border py-10 card shrink-0 w-1/2">
            <h1 className="text-3xl font-bold text-center py-4">
              Sign Up now!
            </h1>

            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-error"
                  type="submit"
                  value="sign up"
                />
              </div>
            </form>

            <div className="">
              <h1>or sign up with</h1>
              <div className="flex justify-center items-center gap-3 text-4xl mt-5">
                <Link onClick={handleGoogleSignup}>
                  <FcGoogle />
                </Link>
                <Link>
                  <FaFacebookSquare />
                </Link>
                <Link>
                  <FaGithub />
                </Link>
              </div>
              <h1 className="mt-6">
                Already have an account?{" "}
                <Link className="text-error font-bold" to={"/signin"}>
                  Sign in
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;
