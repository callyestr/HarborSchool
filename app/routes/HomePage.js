/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#fa3b3b" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#fcecd7",
                borderRadius: "4px"
              }}
            >
              <span>@.@</span>
            </div>
          </div>
          <div
            style={{
              height: "100px",
              backgroundColor: "#fdcdce",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
              borderRadius: "3px",
              display: "block"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                backgroundColor: "rgba(255, 243, 241, 0.84)",
                color: "#fc4f4f",
                fontSize: "56px",
                fontWeight: 306,
                fontStyle: "oblique",
                padding: "0px",
                paddingLeft: "2px",
                paddingRight: "11px"
              }}
            >
              Hello world!
            </span>
            <h2 style={{ padding: "21px" }}>
              <span
                style={{
                  color: "rgba(240, 231, 174, 0.84)",
                  backgroundColor: "rgba(247, 37, 37, 0.84)",
                  fontSize: "28px",
                  fontStyle: "oblique",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  padding: "7px",
                  fontWeight: 200
                }}
              >
                I'm yeseong
              </span>
              <h3 />
              <div />
              <article />
            </h2>
            <main />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#fcecd7",
                borderRadius: "4px"
              }}
            >
              <span
                style={{
                  fontSize: "17px",
                  paddingBottom: "-3px",
                  marginBottom: "-10px"
                }}
              >
                2019.01
              </span>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
