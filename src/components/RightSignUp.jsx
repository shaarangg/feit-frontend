import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
function RightSignUp() {
    const [user, setUser] = useState({
        cname: "",
        ctype: "",
        ename: "",
        email: "",
        mobile: "",
    });
    return (
        <div className="rightSignUpContainer">
            <div>sign in with simple steps</div>
            <div className="comp">
                <div className="peak">
                    <div className="icontainer">
                        <AiOutlineUser />
                    </div>
                    <div>Company Information</div>
                </div>
                <div className="form">
                    <label htmlFor="cname">Company Name</label>
                    <input type="text" name="cname" id="cname" onChange={(e) => setUser({ ...user, cname: e.target.value })} value={user.cname} />
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
                    <button>Next</button>
                </div>
            </div>
            <div className="comp">
                <div className="peak">
                    <div>img</div>
                    <div>Personal Information</div>
                </div>
                <div className="form">
                    <label htmlFor="ename">Name</label>
                    <input type="text" name="ename" id="ename" onChange={(e) => setUser({ ...user, ename: e.target.value })} value={user.ename} />
                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
                    <label htmlFor="number">Mobile No.</label>
                    <input type="tel" name="number" id="number" onChange={(e) => setUser({ ...user, mobile: e.target.value })} value={user.mobile} />
                    <button>Next</button>
                </div>
            </div>
            <div className="comp">
                <div className="peak">
                    <div>img</div>
                    <div>Confirm Account</div>
                </div>
                <div className="form">
                    <label htmlFor="otpe">Enter otp sent on email</label>
                    <input type="number" name="otpe" id="otpe" />
                    <label htmlFor="otpn">enter otp sent on email</label>
                    <input type="number" name="otpn" id="otpn" />
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}

export default RightSignUp;
