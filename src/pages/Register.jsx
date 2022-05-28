import styles from "../styles/Register.module.scss";
import RightSignUp from "../components/RightSignUp";
function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <RightSignUp />
            </div>
            <div className={styles.left}>
                <div>img</div>
                <div>tagline</div>
            </div>
        </div>
    );
}

export default Register;
