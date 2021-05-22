import React from "react";
import emoji from "assets/logo.png";
import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="Topbar__bgColor">
      <div className="Topbar__mainContainer">
        <img className="Topbar__logo" src={emoji} alt="yt" />

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

        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2rem",
          }}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            className="bi bi-power"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
            />
            <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
