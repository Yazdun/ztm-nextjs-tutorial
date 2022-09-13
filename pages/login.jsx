import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Login.module.css";

export default function Login() {
  const handleLoginWithEmail = () => {
    console.log("hello");
  };
  return (
    <>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerWrapper}>
              <Link className={styles.logoLink} href="/">
                <a>
                  <div className={styles.logoWrapper}>
                    <Image
                      src="/static/netflix.svg"
                      alt="Netflix logo"
                      width="128px"
                      height="34px"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signInHeader}>Sign In</h1>
            <input type="text" className={styles.emailInput} />
            <p className={styles.userMsg}></p>
            <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
              Sign In
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
