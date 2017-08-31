import React from 'react';
import {Link} from 'react-router-dom';

const HoverButton = (props) => {
        return (
                <button className="banner-btn" type="button">
                    <Link to={props.link}>
                        <span>{props.hbutton}</span>
                    </Link>
                </button>
        );
    }

export default HoverButton;