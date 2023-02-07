import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const myFooter = () => {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-light pt-1"
    >
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Genres</h6>
              <p>
                <a href="#!" className="text-reset">
                  Fantasy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  History
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Horror
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Romance
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>Williamsburg, VA 23188, US</p>
              <p>+1 757 969 79 13</p>
              <p>
                <a
                  href="https://github.com/yasirozdemir"
                  className="text-reset fw-bold"
                >
                  MYOzdemir Github
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default myFooter;
