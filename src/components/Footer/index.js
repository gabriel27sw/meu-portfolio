import styled from 'styled-components';
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyle';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Bio } from '../../data/constants';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Gabriel Wanderlind</Logo>
        <Nav>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Escolaridade</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          {/* <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon> */}
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Gabriel Wanderlind. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;