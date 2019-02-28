/**
 *
 * Page215
 *
 */

import React, { Component } from "react";

class Page215 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div style={{ height: "200px", width: "200px" }} className="trigger">
          <img
            src="http://lorempixel.com/600/337/nature/"
            style={{ width: "100%", height: "100%" }}
          />
          <div
            style={{
              height: "200px",
              width: "200px",
              position: "absolute",
              top: "0px",
              backgroundColor: "rgba(163, 96, 96, 0.45)"
            }}
            className="target"
          >
            <span
              style={{
                fontSize: "30px",
                color: "#ffffff",
                fontFamily: "Helvetica",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%"
              }}
            >
              Text
            </span>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default Page215;
