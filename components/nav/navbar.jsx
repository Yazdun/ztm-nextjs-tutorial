import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { magic } from "../../lib/magic-client";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState();

  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = () => setShowDropdown((prev) => !prev);

  const getEmail = async () => {
    try {
      const { email } = await magic.user.getMetadata();
      setUsername(email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await magic.user.logout();
      router.push("/login");
      console.log(await magic.user.isLoggedIn());
    } catch (error) {
      console.log("error logging out");
      router.push("/login");
    }
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <div>Netflix</div>
            </div>
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li onClick={handleOnClickHome} className={styles.navItem}>
            Home
          </li>
          <li className={styles.navItem} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/* Expand more icon */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a onClick={handleSignOut} className={styles.linkName}>
                      Sign Out
                    </a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
