import React from "react";
import './MenuItem.scss';

const MenuItem = (props) => {
    const {code, name} = props.item;
    return (
        <li className="menu__item">
            <button type="button" // использую кнопку, а не ссылку потому что тогда другие страницы
               onClick={(e) => {
                   e.preventDefault();
                   console.log(code)
               }}
            >
               <span>
                  {name}
               </span>
            </button>

        </li>
    )
};

export default MenuItem;
