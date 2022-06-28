import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiWindows,
  SiFigma,
  SiNetlify,
  SiAdobephotoshop,
  SiGithub
} from "react-icons/si";
import {
    DiDatabase,
    DiGit,
    DiStackoverflow,
    DiTerminal,
 DiUbuntu,
    DiVisualstudio,
    DiWindows,
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiTerminal />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiNetlify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobephotoshop />
        </Col>
       
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiStackoverflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
        </Col>
    </Row>
  );
}

export default Toolstack;
