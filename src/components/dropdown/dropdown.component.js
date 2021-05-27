import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const MenuItemWithDropDown = ({ dropDownItems, navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropDownWrapper>
      <Wrapper
        onPointerOver={(e) => setIsOpen(true)}
        onPointerLeave={(e) => setIsOpen(false)}
        onClick={(e) => setIsOpen(!isOpen)}
      >
        {navItem + ""} <IoIosArrowDown />
      </Wrapper>
      {isOpen
        ? dropDownItems.map((item) => (
            <DropDownItemWrapper>
              <DropDownKink to={item.link}>{item.name}</DropDownKink>
            </DropDownItemWrapper>
          ))
        : null}
    </DropDownWrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #39424e;
`;
const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DropDownItemWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid red;
  background: #000;
`;
const DropDownKink = styled(Link)`
  text-decoration: none;
`;

export default MenuItemWithDropDown;
