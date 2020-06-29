import React, {PureComponent} from "react";
import './Constructor.scss';
import MenuConstructor from "../../components/MenuConstructor/MenuConstructor";
import SliderItem from "../../components/Slider/SliderItem/SliderItem";
import Specifications from "../../components/Specifications/Specifications";
import Alert from "../../components/Alert/Alert";
import SliderList from "../../components/Slider/SliderList/SliderList";
import {dataConstructor} from "../../common/constructor/constructor";
import PopupInfo from "../../components/PopupInfo/PopupInfo";

export default class Constructor extends PureComponent {

    state = {
        currentNameMenu: 'glowColor',
        currentNameSlider: 'warm',
        currentSlide: 'slide1',
        openAlert: false,
        modalText: null,
        data: null
    };

    componentDidMount() {
        this.setState({data: dataConstructor})
    }

    render() {
        const {data, currentNameMenu, currentNameSlider, openAlert, modalText, currentSlide} = this.state;
        if (data === null) return null;
        const currentItem = data.filter(item => item.code === currentNameMenu)[0];
        const newCurrentSlide = currentItem.slider.filter(slide => slide.code === currentNameSlider)[0];
        return (
            <div className="constructor-wrap">
                <div className="constructor">
                    <div className="constructor__img">
                        <SliderItem data={newCurrentSlide}
                                    currentSlide={currentSlide}
                                    currentNameSlider={currentNameSlider}
                                    handleDots={this.changeCurrentSlide}
                        />
                    </div>
                    <div className="constructor__info">
                        <Specifications data={currentItem.specifications}/>
                        <Alert data={currentItem.alert}
                               openAlert={openAlert}
                               handleOpenAlert={this.handleOpenAlert}
                        />
                        <SliderList data={currentItem.slider}
                                    currentNameSlider={currentNameSlider}
                                    handleCheckbox={this.handleItem}
                        />
                    </div>
                </div>
                {openAlert && <PopupInfo data={modalText}
                                         handleOpenAlert={this.handleOpenAlert}
                />}
                <MenuConstructor data={this.prepareDataMenu()}
                                 currentNameMenu={currentNameMenu}
                />
            </div>
        )
    }

    prepareDataMenu = () => {
        const {data} = this.state;
        return data.map(item => {
            return {name: item.name, code: item.code}
        })
    };

    changeCurrentSlide = (currentSlide) => this.setState({currentSlide});

    handleOpenAlert = (openAlert, modalText) => this.setState({openAlert, modalText});

    handleItem = (currentNameSlider) => this.setState({currentNameSlider});
}
