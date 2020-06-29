import React from "react";
import './SliderList.scss';
import Checkbox from "../../Checkbox/Checkbox";

const SliderList = (props) => {

    return (
        <div className="slider-list">
            {props.data.map(item => {
                let isActive = false;
                if (item.code === props.currentNameSlider) isActive = true;
                return (
                    <div className={`slider-list__item ${isActive ? 'active' : ''}`} key={item.code}>
                        <img src={require(`../../../assets/images/constuctor/glow-color/${item.code}.jpg`)} alt={item.name}/>
                        <span>
                            {item.name}
                        </span>
                        <Checkbox code={item.code} checked={isActive} handleCheckbox={props.handleCheckbox}/>
                    </div>
                )
            })}
        </div>
    )
};

export default SliderList;
