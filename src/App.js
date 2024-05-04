import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { projects, experiences, skills, education } from "./data/constants";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  //background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  //clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  // console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <ToggleButton onClick={() => {
              setDarkMode(!darkMode)
            }}>
          {darkMode ? < IoSunnyOutline fontSize="20px" />  : <IoMoonOutline fontSize="18px"/>}
        </ToggleButton>
        <Body>
          <HeroSection />
          <Wrapper>
            {skills.length ? <Skills /> : null}
            {experiences.length ? <Experience /> : null}
          </Wrapper>
          {projects.length ? <Projects openModal={openModal} setOpenModal={setOpenModal} /> : null}
          <Wrapper>
            {education.length ? <Education /> : null}
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
