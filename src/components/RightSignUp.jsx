import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiOrganizationChart } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RightSignUp() {
    const [company, setCompany] = useState({
        companyName: "",
        typeOfBusiness: "",
        employeeName: "",
        password: "",
        phone: "",
        otp: "",
    });
    const [showForm, setShowForm] = useState([true, false, false]);
    const navigate = useNavigate();

    const sendOtp = async () => {
        try {
            const res = await axios.post(
                "https://api.myserenity.live/org/sendOtp",
                {
                    phone: company.phone,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (res.data.success) {
                setShowForm([false, false, true]);
            } else {
                alert(res.data.message);
            }
        } catch (e) {
            console.log(e);
            alert("User already exists");
        }
    };

    const validateOtp = async () => {
        const res = await axios.post("https://api.myserenity.live/org/signup", company, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.data.success) {
            navigate("/company");
        } else {
            alert(res.data.message);
        }
        console.log(res);
    };

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
                        <input type="text" name="companyName" id="companyName" onChange={(e) => setCompany({ ...company, companyName: e.target.value })} value={company.companyName} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="typeOfBusiness">Type of Company</label>
                        <select id="typeOfBusiness" name="typeOfBusiness" onChange={(e) => setCompany({ ...company, typeOfBusiness: e.target.value })} value={company.typeOfBusiness}>
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
                <button onClick={() => setShowForm([false, true, false])}>Next</button>
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
                        <input type="text" name="employeeName" id="employeeName" onChange={(e) => setCompany({ ...company, employeeName: e.target.value })} value={company.employeeName} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setCompany({ ...company, password: e.target.value })} value={company.pasword} />
                    </div>
                    <div className="form-fields">
                        <label htmlFor="phone">Mobile No.</label>
                        <input type="tel" name="phone" id="number" onChange={(e) => setCompany({ ...company, phone: e.target.value })} value={company.phone} />
                    </div>
                </div>
                <button onClick={sendOtp}>Next</button>
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
                        <input type="number" name="otp" id="otp" onChange={(e) => setCompany({ ...company, otp: e.target.value })} value={company.otp} />
                    </div>
                </div>
                <button onClick={validateOtp}>Submit</button>
            </div>
        </div>
    );
}

export default RightSignUp;
