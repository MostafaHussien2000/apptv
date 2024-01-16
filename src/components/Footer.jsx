import React from "react";

/* Styled Components
=========================================*/
import styled from "styled-components";

/* React Icons
=========================================*/
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer id="footer">
      <div id="footer__container">
        <div className="footer__group">
          <h3>Profile</h3>
          <ul>
            <li>FAQs</li>
            <li>Pricing plans</li>
            <li>Order tracking</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer__group">
          <h3>Recent Posts</h3>
          <ul>
            <li>Touch of uniqueness</li>
            <li>Office we won't forget</li>
            <li>Cicilan</li>
          </ul>
        </div>
        <div className="footer__group">
          <h3>Custome</h3>
          <ul>
            <li>Help & contact us</li>
            <li>Return</li>
            <li>Online stores</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <div className="footer__group">
          <h3>Contact</h3>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const StyleFooter = styled.footer`
  #footer {
  }
`;
