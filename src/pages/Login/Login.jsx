/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import vooshImage from "../../assets/image2.png";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <img src={vooshImage} alt="Voosh Image" className="voosh-logo" />
        <div className="welcome">Welcome!</div>
        <div className="mail-text">
          Please enter your mail id which has payment mails from swiggy and
          zomato
        </div>
        <div className="google-signin-btn">
          <button className="google-btn">
            <Link to="/waiting" className="waiting-link">
              <FcGoogle className="google-icon" />
              <span className="signin-txt">Continue with Google</span>
            </Link>
          </button>
        </div>
        <div className="contact-support-txt">
          DONT HAVE GMAIL? ENTER YOUR MAIL ID AND CONTACT SUPPORT
        </div>
        <form className="contact-form">
          <div>
            <Input type="text" placeholder="Email address" />
          </div>
          <div>
            <Input type="text" placeholder="Phone Number" />
          </div>
          <button className="contact-support-btn">Contact Support</button>
        </form>
      </div>
    </>
  );
};

export default Login;
