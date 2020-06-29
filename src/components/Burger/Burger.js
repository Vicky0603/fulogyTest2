import React from "react";
import './Burger.scss';

const Burger = (props) => {
    return (
        <div className={`menu-toggle ${props.open ? 'open' : ''}`}
             onClick={() => props.onChange(!props.open)}
        >
            <div className="hamburger">
                <span/>
                <span/>
                <span/>
            </div>
            <div className="cross">
                <span/>
                <span/>
            </div>
        </div>
    )
};

export default Burger;
