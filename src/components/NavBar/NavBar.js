import React, {PureComponent} from "react";
import './NavBar.scss';
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import BasketLabel from "../BasketLabel/BasketLabel";
import MenuList from "../Menu/MenuList/MenuList";

export default class NavBar extends PureComponent {

    state = {
        openMenu: false
    };

    render() {
        return (
            <div className="nav-wrap">
                <div className="nav-bar">
                    <Logo/>
                    <div className="nav-bar__items">
                        <div className="nav-bar__item">
                            <BasketLabel/>
                        </div>
                        <div className="nav-bar__item">
                            <Burger open={this.state.openMenu}
                                    onChange={openMenu => this.setState({openMenu})}
                            />
                        </div>
                    </div>
                </div>
                <MenuList
                    open={this.state.openMenu}
                />
            </div>
        )
    }


}
