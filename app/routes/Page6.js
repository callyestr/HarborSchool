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
            paddingRight: "50px",
            paddingBottom: "50px",
            paddingLeft: "50px",
            backgroundColor: "#ffffff"
          }}
        >
          <div style={{ position: "relative" }}>
            <Row style={{ backgroundColor: "#ffffff", height: "40px" }}>
              <Column col={2} style={{ backgroundColor: "#918080" }} />
              <Column col={2} style={{ backgroundColor: "#ffffff" }} />
              <Column col={2} style={{ backgroundColor: "#918080" }} />
              <Column col={1} style={{ backgroundColor: "#ffffff" }} />
              <Column col={2} style={{ backgroundColor: "#918080" }} />
            </Row>
            <Column style={{ height: "80px", backgroundColor: "#ffffff" }} />
            <div />
            <div>
              <Row style={{ height: "100%" }}>
                <Column col={6}>
                  <Row>
                    <Column
                      col={8}
                      style={{
                        backgroundColor: "#ffffff",
                        height: "150px",
                        position: "relative",
                        paddingRight: "20px",
                        paddingBottom: "10px"
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#555555",
                          position: "relative"
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            top: "50%",
                            backgroundColor: "#c76363",
                            fontSize: "97px"
                          }}
                        >
                          SURF
                        </span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#ffffff"
                        }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        backgroundColor: "#ffffff",
                        paddingBottom: "10px",
                        paddingRight: "15px"
                      }}
                    >
                      <div
                        style={{ height: "100%", backgroundColor: "#d0021b" }}
                      />
                    </Column>
                    <div />
                    <Column
                      col={8}
                      style={{
                        backgroundColor: "#ffffff",
                        height: "100px",
                        paddingRight: "20px",
                        paddingTop: "10px"
                      }}
                    >
                      <div
                        style={{
                          height: "100px",
                          backgroundColor: "#131313",
                          paddingTop: "5px"
                        }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        backgroundColor: "#ffffff",
                        height: "100px",
                        paddingTop: "10px",
                        paddingRight: "15px"
                      }}
                    >
                      <div
                        style={{ backgroundColor: "#7e7e7e", height: "100px" }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        height: "200px",
                        paddingTop: "20px",
                        backgroundColor: "#ffffff",
                        paddingRight: "15px"
                      }}
                    >
                      <div
                        style={{ height: "200px", backgroundColor: "#b82e2e" }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        backgroundColor: "#ffffff",
                        height: "200px",
                        paddingLeft: "5px",
                        paddingTop: "20px",
                        paddingRight: "20px"
                      }}
                    >
                      <div
                        style={{ height: "200px", backgroundColor: "#b92626" }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        backgroundColor: "#ffffff",
                        height: "200px",
                        paddingTop: "20px",
                        paddingRight: "15px"
                      }}
                    >
                      <div
                        style={{ height: "200px", backgroundColor: "#be3030" }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{ height: "80px", backgroundColor: "#ffffff" }}
                    >
                      <div
                        style={{
                          backgroundColor: "#c5b5b5",
                          height: "80px",
                          marginTop: "20px",
                          marginRight: "15px"
                        }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        height: "80px",
                        paddingLeft: "5px",
                        paddingTop: "20px",
                        paddingRight: "20px",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <div
                        style={{ height: "80px", backgroundColor: "#b1a3a3" }}
                      />
                    </Column>
                    <Column
                      col={4}
                      style={{
                        height: "80px",
                        paddingTop: "20px",
                        paddingRight: "15px",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <div
                        style={{ height: "70px", backgroundColor: "#bbacac" }}
                      />
                    </Column>
                  </Row>
                </Column>
                <Column col={1} style={{ backgroundColor: "#ffffff" }}>
                  <Row />
                </Column>
                <Column
                  col={5}
                  style={{ backgroundColor: "rgba(155, 155, 155, 0.25)" }}
                >
                  <Row />
                </Column>
                <div />
                <Column
                  col={6}
                  style={{
                    height: "300px",
                    backgroundColor: "#ffffff",
                    position: "relative"
                  }}
                >
                  <Row />
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundColor: "#bbb2b2",
                      position: "absolute",
                      right: "0px",
                      bottom: "0px"
                    }}
                  />
                </Column>
                <Column col={1} style={{ backgroundColor: "#ffffff" }} />
                <Column
                  col={5}
                  style={{
                    backgroundColor: "rgba(155, 155, 155, 0.25)",
                    height: "300px"
                  }}
                >
                  <Row />
                </Column>
              </Row>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
