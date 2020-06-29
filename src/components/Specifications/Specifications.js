import React from "react";
import './Specifications.scss';
import Tag from "../Tag/Tag";

const Specifications = (props) => {
    return (
        <ul className="specifications">
            {props.data.map(item => {
                let desc =  item.desc;
                if (item.desc === undefined) {
                    desc = item.tags.map(tag => <Tag text={tag}/>)
                }

                return (
                    <li className="specifications__item" key={item.code}>
                        <span className="specifications__item-name">
                            {item.name}:
                        </span>
                        <span className="specifications__item-desc">
                            {desc}
                        </span>
                    </li>
                )
            })}
        </ul>
    )
};

export default Specifications;
