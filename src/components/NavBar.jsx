import React from 'react'
import logo from "../assets/logo.png"

import { LuUser2 } from "react-icons/lu";
import styled from 'styled-components';

function NavBar() {
  return (
    <StyledNav id="navbar">
        <div id="navbar-container">
            <div className="logo">
                <img src={logo} alt="app logo" />
            </div>  
            <div className="action">
                <LuUser2 />
            </div>
        </div>
    </StyledNav>
  )
}

export default NavBar


const StyledNav = styled.nav`
    background: red;
    .nav-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

`