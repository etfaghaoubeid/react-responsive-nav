import MenuItem from "../menu-item/menu-item.componet";
import styled from "styled-components";
import MenuItemWithDropDown from "../dropdown/dropdown.component";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItemWrapper>
        <MenuItem>Home </MenuItem>
        <MenuItem>Contact </MenuItem>
        <MenuItem>
          <MenuItemWithDropDown
            navItem="Servises"
            dropDownItems={[
              { link: "/", name: "item1" },
              { link: "/", name: "item1" },
            ]}
          />
        </MenuItem>
      </MenuItemWrapper>
    </MenuContainer>
  );
};
const MenuContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpointMd}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    position: absolute;
    background: red;
    left: 0;
  } ;
`;
const MenuItemWrapper = styled.ul`
  @media (min-width: ${(props) => props.theme.breakpointMd}) {
    display: flex;
    align-items: center;
  }
  @media (max-width: ${(props) => props.theme.breakpointMd}) {
    top: 1.5rem;
    position: absolute;
    margin: 0;
    /* display: flex; */
    /* flex-direction: column; */
    background: #fff;
    color: red;
    /* left: 0; */
    padding: 3px;
    padding-left: 0;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
export default Menu;
