import RightSignUp from "../components/RightSignUp";
import LeftSignUp from "../components/LeftSignUp";
import { NavLink, Link } from "react-router-dom";
function Register() {
    return (
        <>
            <Link to="/" className="homeBtn">
                <p>F</p>
            </Link>
            <div className="registerContainer">
                <LeftSignUp />
                <RightSignUp />
            </div>
        </>
    );
}

export default Register;
