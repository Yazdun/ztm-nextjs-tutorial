import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/loading/loading";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  const fn = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    fn();
  }, []);

  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
