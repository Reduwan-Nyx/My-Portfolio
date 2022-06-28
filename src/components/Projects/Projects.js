import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";

import first1 from '../../Assets/project1.jpeg'
import first2 from '../../Assets/project-5.jpeg'
import first3 from '../../Assets/project2.jpeg'
import first4 from '../../Assets/project3.jpeg'
import first5 from '../../Assets/project4.jpeg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first1}
              isBlog={false}
              title="Monota Car"
              description="This is a website for a factory that manufactures tools. Users can sign up and social login. They can make orders and payments. Cancel order if is't
              pay yet. If paid they can't cancel the order. Admin can make user role to admin role, add new item, change order status and cancel orders
              "
              link="https://monota-car.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first2}
              isBlog={false}
              title="Doctors Portal"
              description=" Users can sign up with an email address and social login.
              .In the appointment section, the appointment result will show as per the date & time available slots.
              .Users can make payments. Payment info will update on the user and admin sides."
              link="https://doctors-portal-6944c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first3}
              isBlog={false}
              title="Halal Food "
              description=" Halal Food is a Food Website
              .All data is stored from the database and visitors can Order a Food
              .If the user is not logged in he/she is redirected to the login page. Users can log in via
              email-password or google.
              "
              link="https://halal-food-2514a.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first4}
              isBlog={false}
              title="Fitness Gym"
              description="This is a Gym website. React bootstrap and React Router has been used.This Website is Fully Responsive"
              link="https://fitness-gym-project.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first5}
              isBlog={false}
              title="Convention Center"
              description="html CSS and Bootstrap Has been used.This Website is Fully Responsive"
              link="https://aman-ullah-convention-center.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
