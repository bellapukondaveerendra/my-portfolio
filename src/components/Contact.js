import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import linkedInQRImg from "../assets/img/linkedIN QR code.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg} // Replace with your QR image if you have one
                  alt="QR Code"
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Let's Connect</h2>
                  <p>
                    You can reach me directly through any of the channels below:
                  </p>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li>
                      📧 <strong>Email:</strong>{" "}
                      <a href="mailto:bellapukondaveerendra@gmail.com">
                        bellapukondaveerendra@gmail.com
                      </a>
                    </li>
                    <br></br>

                    <li>
                      💼 <strong>LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/in/veerendra-bellapukonda-3a1245235/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        /veerendra-bellapukonda
                      </a>
                    </li>
                    <br></br>

                    <li>
                      💻 <strong>GitHub:</strong>{" "}
                      <a
                        href="https://github.com/bellapukondaveerendra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @bellapukondaveerendra
                      </a>
                    </li>
                    <br></br>

                    <li>
                      📄 <strong>Resume:</strong>{" "}
                      <a href="https://drive.google.com/file/d/1nnXRm52KYSvMdrx_hOt6Aazt_b8K4qsh/view">
                        Look at my Resume
                      </a>
                    </li>
                    <br></br>
                    <li>
                      <strong>LinkedIn QR:</strong>{" "}
                      <img
                        className={
                          isVisible ? "animate__animated animate__zoomIn" : ""
                        }
                        src={linkedInQRImg} // Replace with your QR image if you have one
                        alt="QR Code"
                        style={{
                          width: "15%",
                          height: "15%",
                          borderRadius: "10px",
                        }}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
