import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="title">Authentic, Distinctive, Convenient. </div>
                <p className="content">
                    Sernity.js aims to tackle the problem in social media platforms where it uses the power of Natural Language Processing to detect and correct racism as well as all forms of
                    microaggression and foul criticism. It gives you the best developer experience by giving one call detection of hate speech in the input text.
                </p>
                <div className="btnContainer">
                    <Link to="/docs" className="Docsbtn">
                        Start Learning
                    </Link>
                    <Link to="/api" className="Apibtn">
                        Test API
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Home;
