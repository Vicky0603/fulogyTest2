import React from "react";
import './MenuConstructor.scss';

const MenuConstructor = (props) => {
    let data = props.data;
    let isCurrent = false;
    data.forEach(item => {
       if (item.code === props.currentNameMenu) {
           isCurrent = true;
           item.modification = 'active'
        } else {
           if (isCurrent) {
               item.modification = 'next'
           } else {
               item.modification = 'prev'
           }
       }
    });

    return (
        <ul className="menu-constructor">
            {data.map(item => {
                return (
                    <li className={`menu-constructor__item ${item.modification}`} key={item.code}>
                        <button type="button" onClick={() => console.log(item.code)}>
                            {item.name}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};


export default MenuConstructor;
