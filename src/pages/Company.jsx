import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function Company() {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/company");
        }
    }, []);
    const [sin, setSin] = useState("");
    const registerProduct = async () => {
        const phone = cookies.get("phone");
        console.log(token);
        console.log(phone);
        try {
            const body = {
                phone: phone,
                product: sin,
            };
            const res = await axios.post("https://api.myserenity.live/org/addProduct", body, {
                headers: {
                    token,
                },
            });
            alert(res.data.message);
        } catch (e) {
            alert("Product has already been registered");
        }
    };
    return (
        <div className="dashboardContainer">
            <div className="form-fields">
                <label htmlFor="">SN</label>
                <input type="text" placeholder="Enter SN" onChange={(e) => setSin(e.target.value)} value={sin} />
            </div>
            <button onClick={registerProduct}>Register</button>
        </div>
    );
}
export default Company;
