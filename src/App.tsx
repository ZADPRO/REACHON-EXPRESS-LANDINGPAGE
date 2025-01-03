import { useEffect } from "react";
import "./App.css";
import MainRoutes from "./components/MainRoutes/MainRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
