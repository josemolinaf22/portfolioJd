import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jose D Molina </span>
            from <span className="purple"> Salt Lake City, Utah.</span>
            <br />
            Software engineering allows me to develop meaning in people's lives
            on a broad scale. Through intense practice and self-motivation, I
            have honed my craft.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Concert Attendant
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If, at first, you do not succeed, call it version 1.0"{" "}
          </p>
          <footer className="blockquote-footer">Khayri R.R Woulfe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
