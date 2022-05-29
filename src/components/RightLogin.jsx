import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function RightLoginIn() {
    const [compnay, setCompany] = useState({
        password: "",
        phone: "",
    });
    const cookie = new Cookies();
    const navigate = useNavigate();
    const login = async () => {
        try {
            const res = await axios.post("https://api.myserenity.live/org/login", compnay);
            if (res.data.success) {
                cookie.set("phone", compnay.phone);
                cookie.set("token", res.data.token);
                navigate("/companydashboard");
            } else {
                alert(res.data.message);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="rightSignUpContainer">
            <h1>Login as organization</h1>
            <div className="comp">
                <div className="peak">
                    <div className="icontainer">
                        <AiOutlineUser />
                    </div>
                    <h3>Personal Information</h3>
                </div>
                <div className={`form remove`}>
                    <div className="form-fields">
                        <label htmlFor="phone">Mobile No.</label>
                        <input type="tel" name="phone" id="number" onChange={(e) => setCompany({ ...compnay, phone: e.target.value })} value={compnay.phone} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setCompany({ ...compnay, password: e.target.value })} value={compnay.pasword} />
                    </div>
                </div>
                <button onClick={login}>Submit</button>
            </div>
        </div>
    );
}

export default RightLoginIn;
