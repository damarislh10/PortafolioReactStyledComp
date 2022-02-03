import React, { Component } from "react";
import styled from "styled-components";

import About from "../components/About";
import Education from "../components/Education";
import Certification from "../components/Certification";
import Skill from "../components/Skill";

const GlobalStyle = styled.div`
  body {
    font-family: "Lato", sans-serif;
    margin: 0;
    padding:0;
    padding: 5%;
  }
`;

class container extends Component {
  render() {
    return (
      <GlobalStyle>
        <About />
        <Education />
        <Certification />
        <Skill />
      </GlobalStyle>
    );
  }
}

export default container;
