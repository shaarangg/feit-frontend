import RightLogin from "../components/RightLogin";
import LeftLogin from "../components/LeftLogin";
import { Link } from "react-router-dom";
function Register() {
    return (
        <>
            <Link to="/" className="homeBtn">
                <p>F</p>
            </Link>
            <div className="registerContainer">
                <LeftLogin />
                <RightLogin />
            </div>
        </>
    );
}

export default Register;
