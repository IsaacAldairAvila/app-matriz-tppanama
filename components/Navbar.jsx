import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContex";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import * as CiIcons from "react-icons/ci";
const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [shownv, setShownv] = useState(true);
  const [dimensions, setDimensions] = useState(
    window.innerWidth <= 768 ? true : false
  );
  const handleResize = () => {
    setDimensions(window.innerWidth <= 768 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  if (router.pathname === "/login") {
    return <></>;
  }
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/dashboard">
          <div className={styles.nav_logo}>
            <Image
              src="/logo.jpg"
              height={65}
              width={160}
              quality={100}
              alt="logo"
              priority
            />
          </div>
        </Link>
        <button
          className={styles.button}
          onClick={() => {
            logout(), router.push("/login");
          }}
        >
          <div className={styles.icon}>
            <CiIcons.CiCircleChevLeft size={25} />
          </div>
          <div>Cerrar sesión</div>
        </button>
      </div>
    </div>
  );
};

export default NavbarComp;
