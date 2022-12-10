import React, { useRef } from "react";
import eye from "../../img/eye.png";
import { Link } from "react-router-dom";
import styles from "./FormRegister.module.scss";

const FormRegister = () => {
  const inputPassword = useRef<HTMLInputElement>(null);

  const toggleInputHandler = () => {
    if (inputPassword.current?.type === "password") {
      inputPassword.current.type = "text";
      return;
    }
    if (inputPassword.current?.type === "text") {
      inputPassword.current.type = "password";
      return;
    }
  };

  return (
    <form>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          className={styles.input}
          placeholder="admin@trychad.com"
        />
      </label>
      <label className={styles.label}>
        Your name:
        <input type="text" className={styles.input} placeholder="Mega Chad" />
      </label>
      <label className={`${styles.label} mb-8 relative`}>
        <img
          src={eye}
          alt="show or Hide password"
          className={styles.img}
          onClick={toggleInputHandler}
        ></img>
        Password:
        <input
          ref={inputPassword}
          type="password"
          className={styles.input}
          placeholder="Enter password"
        />
      </label>

      <button className={styles.btn}>Continue</button>

      <p className={styles.text}>
        Already have an account?{" "}
        <Link className="text-[#32ABF2]" to="#">
          Login
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
