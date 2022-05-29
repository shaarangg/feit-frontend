import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiOrganizationChart } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
function RightSignUp() {
    const [user, setUser] = useState({
        companyName: "",
        typeOfBusiness: "",
        employeeName: "",
        password: "",
        phone: "",
        otp: "",
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
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" name="companyName" id="companyName" onChange={(e) => setUser({ ...user, companyName: e.target.value })} value={user.companyName} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="typeOfBusiness">Type of Company</label>
                        <select id="typeOfBusiness" name="typeOfBusiness" onChange={(e) => setUser({ ...user, typeOfBusiness: e.target.value })} value={user.typeOfBusiness}>
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
                        <label htmlFor="employeeName">Name</label>
                        <input type="text" name="employeeName" id="employeeName" onChange={(e) => setUser({ ...user, employeeName: e.target.value })} value={user.employeeName} />
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
                        <label htmlFor="otp">Enter otp sent on phone</label>
                        <input type="number" name="otp" id="otp" onChange={(e) => setUser({ ...user, otp: e.target.value })} value={user.otp} />
                    </div>
                </div>
                <button>Next</button>
            </div>
        </div>
    );
}

export default RightSignUp;
