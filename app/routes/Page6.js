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
            paddingLeft: "7%",
            backgroundColor: "#ffffff"
          }}
        >
          <div style={{ position: "relative" }}>
            <Row style={{ backgroundColor: "#ffffff", height: "40px" }}>
              <Column col={2} style={{ fontSize: "18px", fontWeight: 500 }}>
                <span>Logo</span>
              </Column>
              <Column col={6} style={{ backgroundColor: "#ffffff" }} />
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <span>Work</span>
              </Column>
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <span>Play</span>
              </Column>
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <span>About</span>
              </Column>
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <span>Resume</span>
              </Column>
            </Row>
            <div />
            <div>
              <Row style={{ height: "100%" }}>
                <Column col={6} />
                <div />
                <Column col={1} style={{ backgroundColor: "#ffffff" }} />
              </Row>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
