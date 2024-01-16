import React from "react";

/* Images
=========================================*/
import logo from "../assets/logo.png";

/* React Icons
=========================================*/
import { LuUser2 } from "react-icons/lu";

/* Styled Components
=========================================*/
import styled from "styled-components";

function NavBar() {
  return (
    <StyledNav id="navbar">
      <div id="navbar-container">
        <div className="logo">
          <img src={logo} alt="app logo" />
        </div>
        <div className="action">
          <LuUser2 color="#fff" size={"20px"} cursor={"pointer"} />
        </div>
      </div>
    </StyledNav>
  );
}

export default NavBar;

const StyledNav = styled.nav`
  background: rgb(13, 13, 13);
  background: linear-gradient(
    180deg,
    #0d0d0dbb 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  width: 100vw;
  z-index: 3;

  #navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding: 20px 50px;

    img {
      width: 150px;
    }
  }
`;
