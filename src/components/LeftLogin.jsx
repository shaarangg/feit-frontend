import Cookies from "universal-cookie";
function LeftLoginIn() {
    const cookies = Cookies();
    return (
        <div className="leftSignUpContainer">
            <img src="../../assets/arranging-files.png" alt="sign up" />
            <div className="text">Be free from counterfeit</div>
        </div>
    );
}
export default LeftLoginIn;
