import React from "react";
import { useForm } from "react-hook-form";
import { CloseOutlined } from "@ant-design/icons";
import * as styles from "../styles/Login.module.css";

const Login = ({ loginActive, setLoginActive }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const closeModal = (e) => {
    e.preventDefault();
    setLoginActive(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {loginActive && (
        <div className={styles.loginWrapper}>
          <div className={styles.loginContent}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <CloseOutlined />
            </button>
            <form
              className={styles.loginForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>
                Password
                <input
                  type="password"
                  {...register("password", { required: "Enter a password!" })}
                />
              </label>
              <div>
                {errors?.password && (
                  <p className={styles.formError}>
                    {errors?.password?.message || "Error!"}
                  </p>
                )}
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
