import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, ProgressBar, AdidasLogo } from './NavbarStyledComponent'
import { IoAperture } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: `${theme.primary}`, marginBottom: '20;', cursor: 'pointer' }}>
            <IoAperture size="2rem" /> <Span>Gabriel.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#experience'>Experiência</NavLink>
          <NavLink href='#projects'>Projetos</NavLink>
          <NavLink href='#education'>Escolaridade</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Sobre</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experiência</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projetos</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Escolaridade</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: `${theme.white}`,width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
      <ProgressBar id='progress-bar'/>
    </Nav>

  )
}

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  const progressBar = document.querySelector('#progress-bar');

  if (progressBar) {
    progressBar.style.width = `${scrollPercentage}%`;
  }
});

export default Navbar