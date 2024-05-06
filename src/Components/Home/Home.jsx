import { Helmet } from "react-helmet-async";
import About from "./About";
import Bannar from "./Bannar";
import CallToAction from "./CallToAction";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <Helmet><title>Car Doctor | Home</title></Helmet>
            <Bannar></Bannar>
            <About></About>
            <Service></Service>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;