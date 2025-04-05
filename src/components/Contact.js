import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import linkedInQRImg from "../assets/img/linkedIN QR code.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import {
  EnvelopeAt,
  Linkedin,
  Github,
  FileEarmarkArrowDown,
  Telephone,
} from "react-bootstrap-icons";

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
                  <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                    {/* Email */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>📧</span>
                        <strong>Email:</strong>
                      </div>
                      <a href="mailto:bellapukondaveerendra@gmail.com">
                        bellapukondaveerendra@gmail.com
                      </a>
                    </li>

                    {/* Phone */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Telephone size={20} style={{ marginRight: "8px" }} />
                        <strong>Phone:</strong>
                      </div>
                      <a href="tel:+19132184326">+1 (913) 218-4326</a>
                    </li>

                    {/* LinkedIn */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>💼</span>
                        <strong>LinkedIn:</strong>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/veerendra-bellapukonda-3a1245235/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        /veerendra-bellapukonda
                      </a>
                    </li>

                    {/* GitHub */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>💻</span>
                        <strong>GitHub:</strong>
                      </div>
                      <a
                        href="https://github.com/bellapukondaveerendra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @bellapukondaveerendra
                      </a>
                    </li>

                    {/* Resume */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>📄</span>
                        <strong>Resume:</strong>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1nnXRm52KYSvMdrx_hOt6Aazt_b8K4qsh/view"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Look at my Resume
                      </a>
                    </li>

                    {/* QR Code */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <div style={{ width: "100px" }}>
                        <strong>QR:</strong>
                      </div>
                      <img
                        src={linkedInQRImg}
                        alt="LinkedIn QR"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "8px",
                          marginLeft: "8px",
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
