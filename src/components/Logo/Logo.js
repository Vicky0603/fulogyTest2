import React from "react";
import logo from '../../assets/images/svg/logo.svg'
import './Logo.scss';

const Logo = () => {
    return (
        <a onClick={() => {}} href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>

    )
};

export default Logo;
