// MenuHeader.js
import React from "react";
import styled from "styled-components";
import { ReactComponent as MenuBurgerLogo } from "./icons/menuburger.svg";
import { ReactComponent as YTLogo } from "./icons/youtube.svg";

const MenuHeader = ({onMenuClick}) => {
  return (
    <Container>
      <div className="menuburger" onClick={onMenuClick}>
        <MenuBurgerLogo />
      </div>
      <div className="ytlogo">
        <YTLogo />
        <sup>PH</sup>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 0em 1em;
  height: 100%;
  .menuburger {
    width: 24px;
    height: 24px;
  }
  .menuburger:hover {
    cursor: pointer;
  }
  .ytlogo {
    height: 70%;
    gap: 2px;
    display: flex;
    margin-left: 14px;
    svg {
      width: 90px;
      height: 20px;
      align-self: center;
    }
    sup {
      font-size: 10px;
    }
  }
`

export default MenuHeader;
