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
            <div>
              <div>
                <nav>
                  <div>
                    <p
                      style={{
                        fontWeight: 300,
                        backgroundColor: "rgba(253, 212, 182, 0.7)"
                      }}
                    >
                      <span style={{ fontFamily: "Roboto" }}>Moon</span>
                    </p>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: 300,
                        textAlign: "center",
                        backgroundColor: "rgba(252, 229, 204, 0.77)",
                        fontFamily: "Roboto"
                      }}
                    >
                      <span>Ye</span>
                    </p>
                  </div>
                  <p
                    style={{
                      fontWeight: 300,
                      textAlign: "right",
                      backgroundColor: "rgba(253, 237, 213, 0.74)"
                    }}
                  >
                    <span style={{ fontFamily: "Roboto" }}>Seong</span>
                  </p>
                </nav>
                <footer />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  backgroundColor: "#fcecd7",
                  borderRadius: "4px"
                }}
              >
                <img
                  src="https://i.pinimg.com/originals/1c/e1/eb/1ce1ebc8c5a1203f9706486d52165fd3.jpg"
                  style={{
                    width: "15%",
                    display: "block",
                    padding: "5px",
                    color: "#ffffff",
                    height: "250%",
                    margin: "5px",
                    backgroundColor: "#f86161",
                    paddingLeft: "5px"
                  }}
                />
                <span />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
                backgroundColor: "#fdc3b3",
                borderRadius: "4px"
              }}
            >
              <span style={{ color: "#ffffff" }} />
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
                lineHeight: "18px",
                backgroundColor: "rgba(255, 243, 241, 0.84)",
                color: "#fc4f4f",
                fontSize: "56px",
                fontWeight: 306,
                fontStyle: "oblique",
                padding: "0px",
                paddingLeft: "2px",
                paddingRight: "11px",
                fontFamily: "Oleo Script"
              }}
            >
              Hi, Hello
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
                  fontFamily: "Roboto",
                  fontWeight: 220
                }}
              >
                I'm Ye Seong Moon,
              </span>
              <h3 />
              <div />
              <article />
            </h2>
            <main />
          </div>
          <div
            style={{
              fontWeight: 300,
              fontSize: "10px",
              backgroundColor: "#f8e2e2",
              fontFamily: "Roboto"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#fcecd7",
                borderRadius: "4px",
                fontFamily: "Allan",
                fontSize: "16px"
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  paddingBottom: "-3px",
                  marginBottom: "-10px",
                  fontFamily: "Allan",
                  fontWeight: 300
                }}
              >
                seoul based ux/ui designer
              </span>
            </div>
            <p style={{ fontFamily: "Roboto" }}>
              <span style={{ fontWeight: 275, fontSize: "13px" }}>
                callyestr@gmail.com
              </span>
            </p>
            <a href="#">
              <a
                href="https://www.instagram.com/ye_se_m/"
                style={{ fontWeight: 300 }}
                target="_blank"
              >
                <span style={{ fontSize: "14px" }}>Instagram</span>
              </a>
            </a>
            <p />
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
