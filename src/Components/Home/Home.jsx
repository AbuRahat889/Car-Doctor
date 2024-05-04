import About from "./About";
import Bannar from "./Bannar";
import CallToAction from "./CallToAction";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Service></Service>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;