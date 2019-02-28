/**
 *
 * Page40
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";
import { wem2 } from "ruucm-blocks/tools/mixins";
class Page40 extends Component {
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
          <div style={{ height: "500px" }}>
            <Row>
              <Column
                col={3}
                style={{ marginRight: "90px", marginTop: "45px" }}
              >
                <img
                  src="https://d1nu0gr0bkbcfc.cloudfront.net/images/about/me.jpg"
                  style={{ width: "276px", height: "190px" }}
                />
              </Column>
              <Column col={3} style={{ margin: "35px" }}>
                <Row>
                  <Column col={12}>
                    <span style={{ fontFamily: "Karla", fontSize: wem2(50) }}>
                      About
                    </span>
                  </Column>
                  <Column col={12}>
                    <div style={{ height: "30px" }} />
                  </Column>
                  <Column col={10}>
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(17.5),
                        fontWeight: 300,
                        lineHeight: "22px"
                      }}
                    >
                      Parteek Saran is a designer living in San Francisco, CA.
                      He also enjoys riding his bicycle and eating croissants.
                      Just wants to make good things with good folks. Available
                      to collaborate on porjects.
                    </span>
                  </Column>
                  <Column col={2} />
                </Row>
              </Column>
              <Column col={3} style={{ margin: "35px" }}>
                <Row>
                  <Column col={12}>
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(50)
                      }}
                    >
                      Contact
                    </span>
                  </Column>
                  <Column col={12}>
                    <div style={{ height: "30px" }} />
                  </Column>
                  <Column col={12}>
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(18),
                        fontWeight: 300,
                        lineHeight: "22px"
                      }}
                    >
                      Email:
                    </span>
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(18),
                        fontWeight: 300,
                        lineHeight: "22px"
                      }}
                    >
                      parteek@teek.me
                    </span>
                    <div style={{ height: "30px" }} />
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(18),
                        fontWeight: 300,
                        lineHeight: "22px"
                      }}
                    >
                      Twitter: @teek_s
                    </span>
                    <div style={{ height: "30px" }} />
                    <span
                      style={{
                        fontFamily: "Karla, sans-serif",
                        fontSize: wem2(18),
                        fontWeight: 300,
                        lineHeight: "22px"
                      }}
                    >
                      Instagram: @parteek
                    </span>
                  </Column>
                </Row>
              </Column>
            </Row>
          </div>
          <div style={{ position: "relative", fontFamily: "Helvetica Neue" }} />
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default Page40;
