import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RightSignUp() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        phone: "",
        otp: "",
    });
    const [showForm, setShowForm] = useState([true, false]);
    const navigate = useNavigate();
    const sendOtp = async () => {
        const res = await axios.post(
            "https://api.myserenity.live/user/sendOtp",
            {
                phone: user.phone,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(res);
        setShowForm([false, true]);
    };

    const validateOtp = async () => {
        const res = await axios.post("https://api.myserenity.live/user/signup", user, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.data.success) {
            navigate("/customer");
        } else {
            alert(res.data.message);
        }
        console.log(res);
    };
    return (
        <div className="rightSignUpContainer">
            <h1>Sign in with 3 simple steps</h1>
            <div className="comp" onClick={() => setShowForm([true, false])}>
                <div className="peak">
                    <div className="icontainer">
                        <AiOutlineUser />
                    </div>
                    <h3>Personal Information</h3>
                </div>
                <div className={`form ${showForm[0] ? "remove" : ""}`}>
                    <div className="form-fields">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.pasword} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="phone">Mobile No.</label>
                        <input type="tel" name="phone" id="number" onChange={(e) => setUser({ ...user, phone: e.target.value })} value={user.phone} />
                    </div>
                </div>
                <button onClick={sendOtp}>Next</button>
            </div>
            <div className="comp" onClick={() => setShowForm([false, true])}>
                <div className="peak">
                    <div className="icontainer">
                        <GiConfirmed />
                    </div>
                    <h3>Confirm Account</h3>
                </div>
                <div className={`form ${showForm[1] ? "remove" : ""}`}>
                    <div className="form-fields">
                        <label htmlFor="otp">Enter otp sent on phone</label>
                        <input type="number" name="otp" id="otp" onChange={(e) => setUser({ ...user, otp: e.target.value })} value={user.otp} />
                    </div>
                </div>
                <button onClick={validateOtp}>Submit</button>
            </div>
        </div>
    );
}

export default RightSignUp;
