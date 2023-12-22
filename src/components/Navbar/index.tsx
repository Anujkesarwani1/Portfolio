import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "styled-components";
import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileMenuLink,
  MobileMenu,
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  NavLogo,
  Span,
} from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Anuj.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileMenuLink>
          <MobileMenuLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Education
          </MobileMenuLink>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="/"
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
