import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function RightLoginInCustomer() {
    const [user, setUser] = useState({
        password: "",
        phone: "",
    });
    const cookie = new Cookies();
    const navigate = useNavigate();
    const login = async () => {
        try {
            const res = await axios.post("https://api.myserenity.live/user/login", user);
            if (res.data.success) {
                cookie.set("phone", user.phone);
                cookie.set("token", res.data.token);
                navigate("/customerdashboard");
            } else {
                alert(res.data.message);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="rightSignUpContainer">
            <h1>Login as user</h1>
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
                        <input type="tel" name="phone" id="number" onChange={(e) => setUser({ ...user, phone: e.target.value })} value={user.phone} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.pasword} />
                    </div>
                </div>
                <button onClick={login}>Next</button>
            </div>
        </div>
    );
}

export default RightLoginInCustomer;
