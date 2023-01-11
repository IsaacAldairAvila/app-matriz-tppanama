import React from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import * as CiIcons from "react-icons/ci";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <div className={styles.space}>
        <Link href="/dashboard">
          <div
            className={
              router.pathname === "/dashboard"
                ? styles.link_active
                : styles.link
            }
          >
            <div className={styles.icon}>
              <CiIcons.CiHome size={25} />
            </div>
            <p>Inicio</p>
          </div>
        </Link>
      </div>
      <div className={styles.space}>
        <Link href="/dashboard/clientes">
          <div
            className={
              router.pathname === "/dashboard/clientes"
                ? styles.link_active
                : styles.link
            }
          >
            <div className={styles.icon}>
              <CiIcons.CiReceipt size={25} />
            </div>
            <p>{"Clientes"}</p>
          </div>
        </Link>
      </div>
      <div className={styles.space}>
        <Link href="/dashboard/colaboradores">
          <div
            className={
              router.pathname === "/dashboard/colaboradores"
                ? styles.link_active
                : styles.link
            }
          >
            <div className={styles.icon}>
              <CiIcons.CiUser size={25} />
            </div>
            <p>{"Colaboradores"}</p>
          </div>
        </Link>
      </div>
      <div className={styles.space}>
        <Link href="/dashboard/proveedores">
          <div
            className={
              router.pathname === "/dashboard/proveedores"
                ? styles.link_active
                : styles.link
            }
          >
            <div className={styles.icon}>
              <CiIcons.CiViewTimeline size={25} />
            </div>
            <p>{"Proveedores"}</p>
          </div>
        </Link>
      </div>
      <div className={styles.space}>
        <Link href="/dashboard/autoevaluacion">
          <div
            className={
              router.pathname === "/dashboard/autoevaluacion"
                ? styles.link_active
                : styles.link
            }
          >
            <div className={styles.icon}>
              <CiIcons.CiViewTable size={25} />
            </div>
            <p>{"Autoevaluación"}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
