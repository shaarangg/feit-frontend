import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
function Customer() {
    const [sin, setSin] = useState("");
    const cookies = new Cookies();
    const registerProduct = async () => {
        console.log("clicked");
        const phone = cookies.get("phone");
        const token = cookies.get("token");
        console.log(token);
        console.log(phone);
        try {
            const body = {
                phone: phone,
                serialNumber: sin,
            };
            const res = await axios.post("https://api.myserenity.live/user/registerProduct", body, {
                headers: {
                    token,
                },
            });
            alert(res.data.message);
        } catch (e) {
            console.log(e);
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

export default Customer;
