import img from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FireBase/FireBase.config";

const SignIn = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);

  //sign in using email
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("sign in successfully !!!");
         Navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
        // alert(error)
      });
  };

  //sign in using google
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
        // alert(error)
      });
  };

  //sign in with faccebook
  const fbprovaider = new FacebookAuthProvider();
  const handleFacebook = () => {
    signInWithPopup(auth, fbprovaider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
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
            <h1 className="text-3xl font-bold text-center py-4">Login now!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Login" />
              </div>
            </form>

            <div className="">
              <h1>or sign in with</h1>
              <div className="flex justify-center items-center gap-3 text-4xl mt-5">
                <Link onClick={handleGoogleSignIn}>
                  {" "}
                  <FcGoogle />
                </Link>
                <Link onClick={handleFacebook}>
                  {" "}
                  <FaFacebookSquare />
                </Link>
                <Link>
                  {" "}
                  <FaGithub />
                </Link>
              </div>
              <h1 className="mt-6">
                New here?{" "}
                <Link className="text-error font-bold" to={"/signup"}>
                  Sign Up
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
