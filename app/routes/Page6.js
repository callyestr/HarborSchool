/**
 *
 * Page6
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page6 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{
            paddingTop: "50px",
            paddingRight: "7%",
            paddingBottom: "50px",
            paddingLeft: "10%",
            backgroundColor: "#ffffff"
          }}
        >
          <div style={{ position: "relative", fontFamily: "Karla" }}>
            <Row style={{ backgroundColor: "#ffffff", height: "40px" }}>
              <Column col={2} style={{ fontSize: "18px", fontWeight: 500 }}>
                <a
                  href="/work"
                  style={{ color: "#222222", textDecoration: "none" }}
                >
                  <span>Parteek Saran.</span>
                </a>
              </Column>
              <Column col={8} style={{ backgroundColor: "#ffffff" }} />
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <span style={{ fontWeight: 800, color: "#222222" }}>Work</span>
              </Column>
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <a href="/about" style={{ textDecoration: "none" }}>
                  <span style={{ textDecoration: "none", color: "#222222" }}>
                    About
                  </span>
                </a>
              </Column>
            </Row>
          </div>
          <div style={{ height: "100px" }} />
          <div style={{ height: "100px" }}>
            <span style={{ fontSize: "14em", fontWeight: 700 }} />
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
