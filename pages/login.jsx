import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Router, { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState();
  const [userMsg, setUserMsg] = useState();
  const router = useRouter();

  const handleLoginWithEmail = (e) => {
    e.preventDefault();

    if (email) {
      if (email === "yazdun@email.com") {
        // route to dashboard
        router.push("/");
      } else {
        // show user message
        setUserMsg("Something went wrong");
      }
    }
  };

  const handleOnChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    setUserMsg();

    if (email) {
      // route to dashboard
    } else {
      // show user message
      setUserMsg("Enter a valid message");
    }
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
            <input
              type="text"
              className={styles.emailInput}
              onChange={handleOnChangeEmail}
            />
            {userMsg && <p className={styles.userMsg}>{userMsg}</p>}
            <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
              Sign In
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
