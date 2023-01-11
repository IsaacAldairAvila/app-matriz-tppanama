import "../styles/globals.css";
import { AuthContextProvider } from "../contexts/AuthContex";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import NavbarComp from "../components/Navbar";

const noAuthRequired = ["/", "/login"];
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <NavbarComp />
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  );
}
