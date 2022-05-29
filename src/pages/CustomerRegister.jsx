import RightSignUpCustomer from "../components/RightSignUpCustomer";
import LeftSignUpCustomer from "../components/LeftSignUpCustomer";
import { NavLink, Link } from "react-router-dom";
function Register() {
    return (
        <>
            <Link to="/" className="homeBtn">
                <p>F</p>
            </Link>
            <div className="registerContainer">
                <LeftSignUpCustomer />
                <RightSignUpCustomer />
            </div>
        </>
    );
}

export default Register;
