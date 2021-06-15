import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from "../assets/images/vinologo.png";
import Facebook from "../assets/images/facebookIcon.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";


 const Footer = () => {
  return (
    <div>
      <MDBFooter color="purple" className="font-small">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid></MDBContainer>
        </div>
        <div className="footer-copyright text-center py-1" style={{backgroundColor:"#B940A2"}}>
          <MDBContainer fluid></MDBContainer>
        </div>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow
            className="p-3 d-flex justify-center align-items-center"
            style={{ backgroundColor: "white", color: "#000" }}
          >
            <MDBCol md="4" sm="4" xs="12" className="text-center">
              <img src={Logo} alt="Logo" width="100px" />
            </MDBCol>
            <MDBCol md="4" sm="4" xs="12" className="text-center mt-3">
              <h5 className="title text-center" style={{ fontWeight: "bold" }}>
                om
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  color: "black",
                }}
              >
                <div>
                  <li className="list-unstyled p-2 text-center">
                    <a
                      style={{
                        color: "black",
                        margin: "10px",
                        fontWeight: "bold",
                      }}
                      href="#!"
                    >
                      How it works
                    </a>
                  </li>
                  <li className="list-unstyled p-2 text-center">
                    <a
                      href="#!"
                      style={{
                        color: "black",
                        margin: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      About
                    </a>
                  </li>
                </div>
                <div>
                  <li className="list-unstyled p-2 text-center">
                    <a
                      style={{
                        color: "black",
                        margin: "10px",
                        fontWeight: "bold",
                      }}
                      href="#!"
                    >
                      Press
                    </a>
                  </li>
                  <li className="list-unstyled p-2 text-center">
                    <a
                      style={{
                        color: "black",
                        margin: "10px",
                        fontWeight: "bold",
                      }}
                      href="#!"
                    >
                      Contact
                    </a>
                  </li>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4" sm="4" xs="12" className="text-center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <h5
                  className="title text-center"
                  style={{ fontWeight: "bold" }}
                >
                  Social
                </h5>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                    <img src={Facebook} alt="facebook" width="70px" className="p-3" />
              
                    <img src={Instagram} alt="Instagram" width="80px" className="p-3" />
              
                    <img src={Twitter} alt="twitter" width="80px" className="p-3" />
                  
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center bg-white">
          <MDBContainer
            fluid
            style={{ color: "black", margin: "10px", fontWeight: "bold" }}
          >
            &copy; Copyright:{" "}
            <a
              style={{ color: "black", margin: "10px", fontWeight: "bold" }}
              href="https://bookvino.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {new Date().getFullYear()} All Rights Reserved{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer