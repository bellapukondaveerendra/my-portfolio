import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/subtitle-AI.png";
import projImg2 from "../assets/img/Cartoon man and robot sitting at laptops in workplace together.jpg";
import projImg3 from "../assets/img/Cover-letter.jpg";
import projImg4 from "../assets/img/jobber.jpg";
import projImg5 from "../assets/img/BERT.jpg";
import projImg6 from "../assets/img/driver-drowsiness.jpg";
import projImg7 from "../assets/img/voice-controlled-bot.jpg";
import projImg8 from "../assets/img/Hand-written-Digit-Recognition.png";
import projImg9 from "../assets/img/AI-anomoly.png";
import projImg10 from "../assets/img/darwinbox.png";
import projImg11 from "../assets/img/darwinbox1.png";
import projImg12 from "../assets/img/darwinbox2.png";
import projImg13 from "../assets/img/salient-mind.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "SubTitleAI",
      description:
        "Real-time speech-to-text & subtitle overlay tool using OpenAI Whisper",
      imgUrl: projImg1,
    },
    {
      title: "AI Interview Simulator",
      description:
        "Mock interview platform with real-time feedback using GPT & ElevenLabs",
      imgUrl: projImg2,
    },
    {
      title: "Cover Letter Generator",
      description:
        "Chrome extension for AI-generated personalized cover letters",
      imgUrl: projImg3,
    },
    {
      title: "Jobber.io",
      description:
        "AI-powered job application suite with resume and job recommendation tools",
      imgUrl: projImg4,
    },
    {
      title: "BERT QA System for Cancer Data",
      description:
        "Fine-tuned BERT model for domain-specific question answering in healthcare",
      imgUrl: projImg5,
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Real-time fatigue monitoring using CNN and OpenCV",
      imgUrl: projImg6,
    },
    {
      title: "Friday – AI Assistant",
      description:
        "Voice-activated virtual assistant for system automation and search",
      imgUrl: projImg7,
    },
    {
      title: "Handwriting Digit Recognition",
      description: "Digit classification using CNN on the MNIST dataset",
      imgUrl: projImg8,
    },
  ];

  const research_exp = [
    {
      title: "Question Answering System using BERT on Cancer Data",
      description:
        "Published research on question answering using BERT for healthcare",
      imgUrl: projImg5,
    },
    {
      title: "Machine Learning Research Intern",
      description:
        "Anomaly detection models using unsupervised learning and predictive analytics",
      imgUrl: projImg9,
    },
  ];

  const work_exp = [
    {
      title: "Senior Software Engineer",
      description: "June 2022 - May 2024",
      imgUrl: projImg10,
    },
    {
      title: "Software Engineer",
      description: "Jan 2022 - June 2022",
      imgUrl: projImg11,
    },
    {
      title: "Software Engineer Intern",
      description: "June 2021 - Dec 2021",

      imgUrl: projImg12,
    },
    {
      title: "Data Analyst Intern",
      description: "Jan 2021 - June 2021",

      imgUrl: projImg13,
    },
    {
      title: "Web Developer Intern",
      description: "April 2020 - July 2020",

      imgUrl: projImg13,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've built projects across AI, backend systems, and
                    real-world automation — including SubTitleAI for real-time
                    transcription, an AI Interview Simulator, Jobber.io for job
                    applications, a Cover Letter Generator, and a BERT-based QA
                    system for cancer data. Each reflects my focus on
                    intelligent, impactful solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Research Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Work Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {research_exp.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {work_exp.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
