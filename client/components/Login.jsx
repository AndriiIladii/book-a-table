//node modules
import React from "react";
//Form Hook
import { useForm } from "react-hook-form";
//Api library
import axios from "axios";
// UI library
import { CloseOutlined } from "@ant-design/icons";
//styles
import * as styles from "../styles/Login.module.css";

const Login = ({ loginActive, setLoginActive, setUserName }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const closeModal = (e) => {
    e.preventDefault();
    setLoginActive(false);
  };

  const onSubmit = (data) => {
    const user = {
      password: data.password,
    };
    axios({
      method: "POST",
      url: "http://localhost:5000/users",
      data: user,
    })
      .then((response) => {
        console.log(response);
        setUserName(response.data.name);
        localStorage.setItem("userName", response.data.name);
        setLoginActive(false);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    loginActive && (
      <div className={styles.loginWrapper}>
        <div className={styles.loginContent}>
          <button className={styles.closeBtn} onClick={closeModal}>
            <CloseOutlined />
          </button>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <label>
              Пароль
              <input
                type="password"
                {...register("password", { required: "Введіть пароль!" })}
              />
            </label>
            <div>
              {errors?.password && (
                <p className={styles.formError}>
                  {errors?.password?.message || "Помилка!"}
                </p>
              )}
            </div>
            <button className={styles.submitBtn} type="submit">
              Зайти
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
