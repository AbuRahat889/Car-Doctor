import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provaider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    //loading
    if(loader){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if(user){
        return children;
    }


    return <span><Navigate state={location.pathname} to={'/signin'} ></Navigate> </span>;
};

export default PrivateRoute;