import axios from "axios";
function Customer() {
    const registerProduct = async () => {
        // try{
        //     // const res = await axios.post("https://api.myserenity.live/usr/resgisterProduct",);
        //     if(res.data.success){
        //     }
        // }
    };
    return (
        <div className="dashboardContainer">
            <div className="form-fields">
                <label htmlFor="">SN</label>
                <input type="text" placeholder="Enter SN" />
            </div>
            <button onChange={registerProduct}>Register</button>
        </div>
    );
}

export default Customer;
