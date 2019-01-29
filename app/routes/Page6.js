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

        <div style={{ padding: "25px", backgroundColor: "#ffffff" }}>
          <div>
            <Row style={{ backgroundColor: "#ffffff", height: "53px" }} col="3">
              <Column col="2" style={{ backgroundColor: "#e9c5c5" }} />
              <Column col="2" style={{ backgroundColor: "#ffffff" }} />
              <Column col="2" style={{ backgroundColor: "#ffffff" }} />
              <Column
                col="2"
                style={{ backgroundColor: "#e9c8c8", color: "#ffffff" }}
              />
              <Column col="2" style={{ backgroundColor: "#ffffff" }} />
              <Column col="2" style={{ backgroundColor: "#e7bcbc" }} />
            </Row>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "40px",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "4px"
            }}
          />
          <div>
            <Row style={{ backgroundColor: "#ffffff" }} col="3">
              <Column col="6" style={{ backgroundColor: "#d89494" }} />
              <Column
                col="6"
                style={{ backgroundColor: "#ffffff", height: "100px" }}
              >
                <span style={{ backgroundColor: "#ffffff" }} />
              </Column>
              <Column col="6" style={{ backgroundColor: "#ffffff" }} />
            </Row>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "40px",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "4px"
            }}
          />
          <div style={{ height: "200px" }}>
            <Row style={{ backgroundColor: "#ffffff", height: "100%" }} col="3">
              <Column
                col="12"
                style={{ backgroundColor: "#a26565", height: "1000px" }}
              />
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "30px",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "4px"
              }}
            />
            <div>
              <Row
                style={{ backgroundColor: "#ffffff", height: "30px" }}
                col="3"
              >
                <Column col="1" style={{ backgroundColor: "#b49595" }} />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
              </Row>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "30px",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "4px"
              }}
            />
            <div style={{ height: "356px" }}>
              <Row
                style={{ backgroundColor: "#ffffff", height: "400px" }}
                col="3"
              >
                <Column
                  col="3"
                  style={{ height: "220px", paddingRight: "20px" }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "250px",
                        alignItems: "center",
                        backgroundColor: "#d8bfbd",
                        borderRadius: "4px",
                        width: "100%"
                      }}
                    />
                  </div>
                </Column>
                <Column
                  col="3"
                  style={{ paddingLeft: "5px", paddingRight: "20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "350px",
                      alignItems: "center",
                      backgroundColor: "#cca99f",
                      borderRadius: "4px",
                      width: "100%",
                      paddingRight: "5px"
                    }}
                  />
                </Column>
                <Column
                  col="3"
                  style={{ paddingLeft: "5px", paddingRight: "20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "350px",
                      alignItems: "center",
                      backgroundColor: "#c7a2a2",
                      borderRadius: "4px",
                      width: "100%"
                    }}
                  />
                </Column>
                <Column col="3" style={{ paddingLeft: "5px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "350px",
                      alignItems: "center",
                      borderRadius: "4px",
                      width: "100%",
                      paddingLeft: "5px",
                      backgroundColor: "#c2a2a2"
                    }}
                  />
                </Column>
              </Row>
            </div>
            <div style={{ height: "50px", backgroundColor: "#ffffff" }}>
              <Row style={{ backgroundColor: "#ffffff" }} col="3">
                <Column col="5" style={{ backgroundColor: "#ffffff" }} />
                <Column col="5" style={{ backgroundColor: "#ffffff" }} />
              </Row>
            </div>
            <div>
              <Row
                style={{ backgroundColor: "#ffffff", height: "30px" }}
                col="3"
              >
                <Column col="1" />
                <Column col="1" />
                <Column col="1" />
                <Column col="9" style={{ backgroundColor: "#977171" }} />
              </Row>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "30px",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "4px"
              }}
            />
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
