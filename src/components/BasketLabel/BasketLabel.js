import React from "react";
import './BasketLabel.scss';
import basket from '../../assets/images/svg/basket.svg'

const BasketLabel = () => {

    return (
        <div className="basket-label">
            <button type="button" // использую кнопку, потому что нужна страница корзины
               onClick={(e) => {
                   e.preventDefault();
                   console.log('basket');
               }}
            >
                <img src={basket} alt="basket"/>
                <span className="basket-label__info">
                    1
                </span>
            </button>
        </div>
    )
};

export default BasketLabel;
