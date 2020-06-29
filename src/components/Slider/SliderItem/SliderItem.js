import React from "react";
import './SliderItem.scss';

const SliderItem = (props) => {
    const {data, currentSlide, handleDots, currentNameSlider} = props;
    const newCurrentSlide = data.gallery.filter(item => item === currentSlide)[0];
    return (
        <div className="slider-item">
            <img src={require(`../../../assets/images/constuctor/glow-color/${currentNameSlider}/${newCurrentSlide}.jpg`)} alt={newCurrentSlide}/>
            <span className="slider-item__dots">
                {data.gallery.map(item => {
                    let className = 'dot';
                    if (item === currentSlide) className += ' active';
                    return <span className={className} key={item} onClick={() => handleDots(item)}/>
                })}
            </span>
        </div>
    )
};

export default SliderItem;
