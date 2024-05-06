import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provaider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    //loading
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if(user){
        return children;
    }


    return <span><Navigate to={'/signin'} state={location.pathname}></Navigate> </span>;
};

export default PrivateRoute;