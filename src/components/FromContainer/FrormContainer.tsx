import logo from "../..//img/logo.png";
import bg from "../..//img/bg.png";
import FormRegister from "../FormRegister/FormRegister";
import styles from "./FrormContainer.module.scss";

const FormContainer = () => {
  return (
    <div className={styles.wrapper}>
      <img src={bg} alt="bg" className={styles.bg}></img>
      <div className={styles.form}>
        <div className="mb-6">
          <img src={logo} alt="logo"></img>
        </div>
        <h2 className={styles.caption}>Welcome to Chad</h2>
        <p className={styles.text}>
          Go live in 10 minutes! Chad's self-service widget empowers your
          customers to manage orders and track shipments—with Chad, you can
          offer fast support 24/7 without going crazy.
        </p>

        <FormRegister />
      </div>
    </div>
  );
};

export default FormContainer;
