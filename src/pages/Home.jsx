import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <Navbar />
            <div className="masterContainer">
                <div className="homeContainer">
                    <div className="title">Authentic, Distinctive, Convenient. </div>
                    <p className="content">The feit aims at harnessing the power of Web3 enabled technologies to solve the issue of counterfeit products.</p>
                    <div className="btnContainer">
                        <Link to="/docs" className="Docsbtn">
                            Customer Log In
                        </Link>
                        <Link to="/api" className="Apibtn">
                            Company Log In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
