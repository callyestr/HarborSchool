/**
 *
 * Page6
 *
 */
// home
import React, { Component } from "react";

import { Row, Column } from "modules/Layout";
import { wem2 } from "ruucm-blocks/tools/mixins";
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
          <div style={{ position: "relative", fontFamily: "Helvetica Neue" }}>
            <Row style={{ backgroundColor: "#ffffff", height: "40px" }}>
              <Column
                col={2}
                style={{
                  fontSize: wem2(18),
                  fontWeight: 500,
                  paddingLeft: "12px"
                }}
                className="saran_logo"
              >
                <a
                  href="/work"
                  style={{ color: "#222222", textDecoration: "none" }}
                >
                  <span style={{ fontSize: wem2(18), fontWeight: 400 }}>
                    Parteek Saran.
                  </span>
                </a>
              </Column>
              <Column col={8} style={{ backgroundColor: "#ffffff" }} />
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <a href="/work" style={{ textDecoration: "none" }}>
                  <span
                    style={{
                      fontWeight: 400,
                      color: "#222222",
                      fontSize: wem2(18)
                    }}
                    className="work"
                  >
                    Work
                  </span>
                </a>
              </Column>
              <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                <a href="/about" style={{ textDecoration: "none" }}>
                  <span
                    style={{
                      textDecoration: "none",
                      color: "#222222",
                      fontSize: wem2(18),
                      fontWeight: 400
                    }}
                    className="about"
                  >
                    About
                  </span>
                </a>
              </Column>
            </Row>
          </div>
          <div style={{ height: "100px" }} />
          <div style={{ marginBottom: "50px" }}>
            <a
              href="/GH2018"
              style={{
                textDecoration: "none",
                color: "#000000",
                display: "inline-block"
              }}
            >
              <span
                style={{
                  fontSize: wem2(50),
                  fontWeight: 400,
                  display: "block",
                  fontFamily: "Helvetica Neue",
                  padding: "5px"
                }}
              >
                Google Hardware 2018
              </span>
              <span
                style={{
                  fontSize: wem2(50),
                  fontWeight: 400,
                  display: "block",
                  fontFamily: "Helvetica Neue",
                  padding: "5px"
                }}
              >
                Launch
              </span>
            </a>
          </div>
          <a
            href="/Pixel2017"
            style={{
              color: "#000000",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            <div>
              <span
                style={{
                  fontSize: wem2(50),
                  fontWeight: 400,
                  display: "block",
                  fontFamily: "Helvetica Neue",
                  padding: "5px"
                }}
              >
                Pixel 2017 Wallpapers
              </span>
            </div>
          </a>
          <div style={{ marginBottom: "50px", marginTop: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Google Hardware Lookbook
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Google Hardware Brand
            </span>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Brand identity
            </span>
            <span
              style={{
                fontSize: wem2(15),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                marginTop: "20px"
              }}
            >
              Coming soon
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Pixelbook Lifestyle
            </span>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Photography
            </span>
            <span
              style={{
                fontSize: wem2(15),
                fontWeight: 400,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                marginTop: "20px"
              }}
            >
              Coming soon
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              True Ventures
            </span>
            <span
              style={{
                fontSize: wem2(15),
                fontWeight: 400,
                display: "inline",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                marginTop: "20px",
                paddingBottom: "5px",
                position: "relative",
                bottom: "27px",
                left: "-7px"
              }}
            >
              Coming soon
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Chrome OS
            </span>
            <span
              style={{
                fontSize: wem2(15),
                fontWeight: 400,
                display: "inline",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                marginTop: "20px",
                paddingBottom: "5px",
                position: "relative",
                bottom: "27px",
                left: "-7px"
              }}
            >
              Coming soon
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Material Design
            </span>
            <span
              style={{
                fontSize: wem2(15),
                fontWeight: 400,
                display: "inline",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                marginTop: "20px",
                paddingBottom: "5px",
                position: "relative",
                bottom: "27px",
                left: "-7px"
              }}
            >
              Coming soon
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Form
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Lady Gaga ARTPOP
            </span>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: wem2(50),
                fontWeight: 400,
                display: "inline-block",
                fontFamily: "Helvetica Neue",
                padding: "5px"
              }}
            >
              Broooo App - iOSDevCamp
            </span>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
