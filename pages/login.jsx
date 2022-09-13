import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Router, { useRouter } from "next/router";
import { magic } from "../lib/magic-client";

export default function Login() {
  const [email, setEmail] = useState();
  const [userMsg, setUserMsg] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    if (email) {
      if (email === "yazduntube@gmail.com") {
        // route to dashboard
        // log in a user by their email
        try {
          setLoading(true);

          const didToken = await magic.auth.loginWithMagicLink({
            email,
          });
          console.log(didToken);
          if (didToken) {
            router.push("/");
            setLoading(false);
          }
        } catch (err) {
          // Handle errors if required!
          setLoading(false);
          console.log(err);
        }
      } else {
        // show user message
        setUserMsg("Something went wrong");
        setLoading(false);
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
      setLoading(false);
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
              {loading ? "Loading" : "Sign In"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
