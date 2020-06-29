import React from "react";
import './Alert.scss';

const Alert = (props) => {
    return (
        <div className="alert">
            <button onClick={() => props.handleOpenAlert(true, props.data.desc)}>
                i
            </button>
            <span>
                {props.data.name}
            </span>
        </div>
    )
};

export default Alert;
