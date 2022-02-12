import React from "react";
import SideBar from "./SideBar";

function NavBar() {
  return (
    <div>
      <nav className="nav" id="nav">
        <a href="/">
          <h1>Gaurav N V</h1>
        </a>
        <span
          className="ul2"
          onClick={() => {
            if (document.getElementById("nav2").style.display == "block") {
              document.getElementById("nav2").style.display = "none";
              console.log("clicked1");
            } else if (
              document.getElementById("nav2").style.display == "none"
            ) {
              document.getElementById("nav2").style.display = "block";
              console.log("clicked2");
            }
            console.log(document.getElementById("nav2").style.display);
          }}
        >
          <i class="fas fa-bars"></i>
        </span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav id="nav2">
        <SideBar />
      </nav>
    </div>
  );
}

export default NavBar;
