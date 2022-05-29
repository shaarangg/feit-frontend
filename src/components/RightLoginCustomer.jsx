import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
function RightLoginInCustomer() {
    const [user, setUser] = useState({
        password: "",
        phone: "",
    });
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
                <button>Next</button>
            </div>
        </div>
    );
}

export default RightLoginInCustomer;
