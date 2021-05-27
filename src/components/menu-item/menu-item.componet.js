import styled from "styled-components";
import { Link } from "react-router-dom";
const MenuItem = ({ children, to, hasDropdown }) => {
  return (
    <NavItem>
      <NavItemLink to={to}>{children}</NavItemLink>
    </NavItem>
  );
};
const NavItemLink = styled(Link)`
  display: inline-block;
  height: 60px;
  color: #b7c9cc;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 60px;
  text-decoration: none;
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    display: inline-block;
    /* height: 60px; */
    color: #000;
    text-transform: uppercase;
    /* font-weight: 700; */
    font-size: 14px;
    /* line-height: 60px; */
  }
`;
const NavItem = styled.li`
  width: 100%;
  list-style: none;
  @media (min-width: ${(props) => props.theme.breakpointMd}) {
    margin-left: 1rem;
    margin-right: 1rem;
    &:active {
      border-bottom: 5px solid #1ba94c;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    border-bottom: 2px solid #fff;
    margin-left: 0;
    left: 0;
    padding: 0 1rem;
  }
`;
export default MenuItem;
