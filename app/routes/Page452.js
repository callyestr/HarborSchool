/**
 *
 * Page452
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page452 extends Component {
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
                  fontSize: "18px",
                  fontWeight: 500,
                  paddingLeft: "12px"
                }}
              >
                <a
                  href="/work"
                  style={{ color: "#222222", textDecoration: "none" }}
                >
                  <span style={{ fontSize: "18px", fontWeight: 400 }}>
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
                      fontSize: "18px"
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
                      fontSize: "18px",
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
        </div>

        <div
          style={{
            paddingTop: "50px",
            paddingRight: "7%",
            paddingBottom: "50px",
            paddingLeft: "10%",
            backgroundColor: "#ffffff",
            fontSize: "36px",
            fontFamily: "HelveticaNeue"
          }}
        >
          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: "140px",
                fontWeight: 700,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                paddingBottom: "45px",
                color: "#222222"
              }}
            >
              Google
            </span>
            <span
              style={{
                fontSize: "140px",
                fontWeight: 700,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                paddingBottom: "45px",
                color: "#222222"
              }}
            >
              Hardware 2018
            </span>
            <span
              style={{
                fontSize: "140px",
                fontWeight: 700,
                display: "block",
                fontFamily: "Helvetica Neue",
                padding: "5px",
                paddingBottom: "45px",
                color: "#222222"
              }}
            >
              Launch
            </span>
          </div>
          <Row>
            <Column col={5}>
              <span
                style={{
                  fontWeight: 400,
                  fontFamily: "HelveticaNeue",
                  color: "#222222",
                  fontSize: "18px",
                  lineHeight: "23px"
                }}
              >
                Worked with design team to develop the story and art direction of the product reveals for the Google Hardware 2018 launch. Team: Philip Battin, Curtis Flanagan, Nathan Allen, Parteek Saran. 3D Production and Animation Kuhl&Han.
              </span>
            </Column>
          </Row>
          <div style={{ height: "100px" }} />
          <div>
            <span style={{ color: "#222222" }}>Pixel 3 Product Reveal</span>
            <video
              autoPlay={true}
              loop={true}
              muted={false}
              style={{ width: "100%", marginTop: "20px" }}
            >
              <source
                src="http://d1nu0gr0bkbcfc.cloudfront.net/images/hardwarelaunch2018/Pixel.mp4"
                type="video/mp4"
              />
            </video>
            <div style={{ height: "170px" }} />
          </div>
          <div>
            <span style={{ color: "#222222" }}>
              Google Home Hub Product Reveal
            </span>
            <video
              autoPlay={true}
              loop={true}
              muted={false}
              style={{ width: "100%", marginTop: "20px" }}
            >
              <source
                src="http://d1nu0gr0bkbcfc.cloudfront.net/images/hardwarelaunch2018/Home.mp4"
                type="video/mp4"
              />
            </video>
            <div style={{ height: "170px" }} />
          </div>
          <div>
            <span style={{ color: "#222222" }}>
              Google Slate Product Reveal
            </span>
            <video
              autoPlay={true}
              loop={true}
              muted={false}
              style={{ width: "100%", marginTop: "20px" }}
            >
              <source
                src="http://d1nu0gr0bkbcfc.cloudfront.net/images/hardwarelaunch2018/Slate.mp4"
                type="video/mp4"
              />
            </video>
            <div style={{ height: "170px" }} />
          </div>
          <div>
            <span style={{ color: "#222222" }}>Family Product Reveal</span>
            <video
              autoPlay={true}
              loop={true}
              muted={false}
              style={{ width: "100%", marginTop: "20px" }}
            >
              <source
                src="http://d1nu0gr0bkbcfc.cloudfront.net/images/hardwarelaunch2018/Family.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page452;
