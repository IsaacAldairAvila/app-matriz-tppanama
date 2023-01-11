import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContex";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });



  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>

        <Image
          src="/logo.jpg"
          height={65}
          width={160}
          quality={100}
          alt="logo"
          priority
        />

      </div>
      <div className={styles.layout}>
        <div className={styles.bienvenido}>{"Bienvenido !"}</div>
        <div className={styles.mensajelogin}>{"Inicia Sesión en"}</div>
        <div className={styles.mensajeportal}>
          {"Portal de Matríz de riesgo"}
        </div>
        <div className={styles.description}>
          {"Para solicitar una cuenta complete el siguiente formulario "}
          <a
            href="https://forms.gle/Y59yUUd9UHp95bGFA"
            target="_blank"
            rel="noreferrer"
            className={styles.descriptionlink}
          >
            {"Registrarse"}
          </a>
        </div>
        <div className={styles.img}>
          <Image src="/login.svg" alt="login" className={styles.img} fill />
        </div>
      </div>
      <form className={styles.layoutlogin} onSubmit={handleLogin}>
        <div className={styles.text}>{"Inicio de sesión"}</div>
        <div className={styles.inputlabel}>
          <label>
            <div className={styles.label}>{"Correo electrónico:"}</div>
            <input
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="micorreo@dominio.com"
              pattern=".+@gmail.com"
              id="email"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.inputlabel}>
          <label>
            <div className={styles.label}>{"Contraseña:"}</div>
            <input
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              id="password"
              className={styles.input}
            />
          </label>
        </div>
        {/* <div className={styles.forgotpassword}>
          <a
            href="https://forms.gle/Y59yUUd9UHp95bGFA"
            placeholder="12345678"
            target="_blank"
            rel="noreferrer"
            className={styles.descriptionlink}
          >
            {"Olvidó contraseña?"}
          </a>
        </div> */}
        <div className={styles.buttonlogin}>
          <button className={styles.button} type="submit">{"Iniciar sesión"}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
