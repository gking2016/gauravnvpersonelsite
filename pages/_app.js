import NavBar from "../Components/NavBar";
import "../styles/globals.css";
import "../css/NavBar.css";
import "../css/Home.css";
import "../css/Contact.css";
import "../css/Footer.css";
import "../css/Aboutme.css";
import "../css/Skills.css";
import "../css/Projects.css";
import "../css/SideBar.css";
import "../css/ContactH.css";
import Footer from "../Components/Footer";
// import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  // const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY < 100;
  //     if (scrollCheck !== scroll) {
  //       setScroll(scrollCheck);
  //     }
  //     if (!scroll) {
  //       document.getElementById("nav").style.position = "fixed";
  //       document.getElementById("nav").style.width = "100%";
  //       document.getElementById("nav").style.top = "0";
  //       document.getElementById("nav").style.filter = "alpha(opacity=100)";
  //     } else {
  //       document.getElementById("nav").style.position = "static";
  //       document.getElementById("nav").style.width = "100%";
  //     }
  //   });
  // });
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"
        integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
        crossorigin="anonymous"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@700&family=Rubik:wght@300;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <NavBar />
      <Component {...pageProps} />

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}

export default MyApp;
