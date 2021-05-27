import Menu from "../menu/menu.component";
import styled from "styled-components";
import { useState } from "react";

const Navbar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <HumbergerWrapper onClick={handleClick}>
        <Humberger />
        <Humberger />
        <Humberger />
      </HumbergerWrapper>
      <Logo>logo</Logo>
      <Menu />
    </Nav>
  );
};
const Logo = styled.span`
  right: 1rem;
  color: #fff;
  font-weight: 700;
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    position: absolute;
  }
`;
const HumbergerWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  @media (min-width: ${(props) => props.theme.breakpointMd}) {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Humberger = styled.span`
  height: 2px;
  margin: 0.2rem;
  width: 2rem;
  display: block;
  background: #fff;
`;
const Nav = styled.nav`
  height: 3rem;
  background-color: #39424e;
  align-items: center;
  display: flex;

  @media (min-width: ${(props) => props.theme.breakpointLg}) {
    display: flex;
  }
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    position: relative;
    left: 0;
  }
`;

export default Navbar;
