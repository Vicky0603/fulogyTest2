import React, {Component} from "react";
import './MenuList.scss';
import PropTypes from 'prop-types'
import {menuList} from "../../../common/helper/Menu/MenuList";
import MenuItem from "../MenuItem/MenuItem";

export default class MenuList extends Component {
    static propTypes = {
        open: PropTypes.bool
    };
    render() {
        const {open} = this.props;
        return (
            <ul className={`menu ${open ? 'open' : ''}`}>
                {menuList.map(item => {
                    return <MenuItem item={item}
                                     key={item.code}
                    />
                })}
            </ul>
        )
    }
}
