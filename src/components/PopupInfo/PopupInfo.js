import React from "react";
import './PopupInfo.scss';
import arrow from '../../assets/images/svg/arrow.svg'

const PopupInfo = (props) => {

    if (props.data === null) return null;

    return (
        <div className="popup-info">
            <button type="button"
                    className="popup-info__cancel"
                    onClick={() => props.handleOpenAlert(false, null)}
            >
                <img src={arrow} alt="arrow"/>
                Вернуться
            </button>
            <div className="popup-info__content">
                {props.data.map(item => {
                    return (
                        <p key={item}>
                            {item}
                        </p>
                    )
                })}
            </div>
        </div>
    )
};

export default PopupInfo;
