import React from "react";
import './Checkbox.scss';
import checkbox from '../../assets/images/svg/checkbox.svg'

const Checkbox = (props) => {

    return (
        <label className="checkbox" onClick={() => props.handleCheckbox(props.code)}>
            <input type="checkbox" checked={props.checked}/>
            <span className="checkbox__text">
                <img src={checkbox} alt={props.code}/>
            </span>
        </label>
    )
};

export default Checkbox;
