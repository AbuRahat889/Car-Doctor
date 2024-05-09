import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../FireBase/FireBase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //create user using email and password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //check user all ready exit or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const currentEmail = currentUser?.email || user?.email;
      const loggedUser = { email: currentEmail };
      setUser(currentUser);
      setLoader(false);

      //set token from jwt *********************/
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token paisi : ", res.data);
          });
      }
      //if user log out then cookie is clear
      else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("user log out ", res.data);
          });
      }
      //************************** end token /
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //sign in using email and password

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loader,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
