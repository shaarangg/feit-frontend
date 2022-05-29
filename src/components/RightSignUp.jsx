import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiOrganizationChart } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
function RightSignUp() {
    const [user, setUser] = useState({
        cname: "",
        ctype: "",
        ename: "",
        email: "",
        mobile: "",
    });
    const [showForm, setShowForm] = useState([true, false, false]);
    return (
        <div className="rightSignUpContainer">
            <h1>Sign in with 3 simple steps</h1>
            <div className="comp" onClick={() => setShowForm([true, false, false])}>
                <div className="peak">
                    <div className="icontainer">
                        <RiOrganizationChart />
                    </div>
                    <h3>Company Information</h3>
                </div>
                <div className={`form ${showForm[0] ? "remove" : ""}`}>
                    <div className="form-fields">
                        <label htmlFor="cname">Company Name</label>
                        <input type="text" name="cname" id="cname" onChange={(e) => setUser({ ...user, cname: e.target.value })} value={user.cname} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="ctype">Type of Company</label>
                        <select id="ctype" name="ctype" onChange={(e) => setUser({ ...user, ctype: e.target.value })} value={user.ctype}>
                            <option>Apparel / Undergarments</option>
                            <option>Education</option>
                            <option>Electronics</option>
                            <option>Entertainment</option>
                            <option>Food And Beverage</option>
                            <option>Footwear</option>
                            <option>Pharmacy</option>
                            <option>Retail(Apparel/Toys)</option>
                            <option>Salon and Spa</option>
                            <option>Sports and Fitness</option>
                            <option>Stationery/Craft</option>
                            <option>Super Market</option>
                            <option>Toy Shops</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <button>Next</button>
            </div>
            <div className="comp" onClick={() => setShowForm([false, true, false])}>
                <div className="peak">
                    <div className="icontainer">
                        <AiOutlineUser />
                    </div>
                    <h3>Personal Information</h3>
                </div>
                <div className={`form ${showForm[1] ? "remove" : ""}`}>
                    <div className="form-fields">
                        <label htmlFor="ename">Name</label>
                        <input type="text" name="ename" id="ename" onChange={(e) => setUser({ ...user, ename: e.target.value })} value={user.ename} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="email">Email ID</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="number">Mobile No.</label>
                        <input type="tel" name="number" id="number" onChange={(e) => setUser({ ...user, mobile: e.target.value })} value={user.mobile} />
                    </div>
                </div>
                <button>Next</button>
            </div>
            <div className="comp" onClick={() => setShowForm([false, false, true])}>
                <div className="peak">
                    <div className="icontainer">
                        <GiConfirmed />
                    </div>
                    <h3>Confirm Account</h3>
                </div>
                <div className={`form ${showForm[2] ? "remove" : ""}`}>
                    <div className="form-fields">
                        <label htmlFor="otpe">Enter otp sent on email</label>
                        <input type="number" name="otpe" id="otpe" />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="otpn">Enter otp sent on phone</label>
                        <input type="number" name="otpn" id="otpn" />
                    </div>
                </div>
                <button>Next</button>
            </div>
        </div>
    );
}

export default RightSignUp;
