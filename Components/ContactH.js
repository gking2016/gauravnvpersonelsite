import React from "react";

function ContactH() {
  return (
    <div className="Footer2">
      <div className="cent">
        <h1>Lets Connect!!</h1>
        <p>Aliqua consectetur cillum sit non reprehenderit.</p>
        <div className="Connect">
          <i
            class="fas fa-envelope"
            style={{ color: "black", marginRight: "10px", marginLeft: "5px;" }}
          ></i>
          <input type="email" placeholder="Email..." />
          <button>Join</button>
        </div>
      </div>
      <div className="Footer_Footer">
        <p>
          <i class="far fa-copyright"></i>GAURAVNV All Rights Reserved 2022
        </p>
        <p>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter-square"></i>
        </p>
        <p>Made By Gaurav N V</p>
      </div>
    </div>
  );
}

export default ContactH;
