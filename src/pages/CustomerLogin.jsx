import RightLoginCustomer from "../components/RightLoginCustomer";
import LeftLoginCustomer from "../components/LeftLoginCustomer";
import { Link } from "react-router-dom";
function Register() {
    return (
        <>
            <Link to="/" className="homeBtn">
                <p>F</p>
            </Link>
            <div className="registerContainer">
                <LeftLoginCustomer />
                <RightLoginCustomer />
            </div>
        </>
    );
}

export default Register;
