import React from "react";
import emoji from "assets/logo.png";
import "./Topbar.scss";
import powerOnOff from "assets/powerOnOff.svg";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";


export default function Topbar() {
  // isLoggedIn: state => state.auth.isLoggedn

  function logoutCustomer() {
    // this.$store.commit("auth/logoutCustomer");
  }
  function goToHome() {
    // history.push("/");
  }

  return (
    <div className="Topbar__bgColor">
      <div className="Topbar__mainContainer">
        <img
          onClick={goToHome}
          className="Topbar__logo"
          src={emoji}
          alt="yt"
        />

        <div>
          <div>
            <div className="Topbar__phone-gst">
              <div className="Topbar__gst">GST: 36BDEPK3258C1ZT</div>
              <div>Phone: 9666542244</div>
            </div>
          </div>

          <div>
            <div className="Topbar__MainTitle" style={{ cursor: "pointer" }}>
              Sri Srinivasa Stationery And General Stores
            </div>
            <div className="Topbar__address">
              Shop No: D5, R.T.C. Complex, Main Road, Zaheerabad
            </div>
          </div>
        </div>

        <div onClick={goToHome} className="Topbar__poweronoff">
          <img src={powerOnOff} alt="powerOnOff" />
        </div>
      </div>
    </div>
  );
}
