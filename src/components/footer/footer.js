import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="contact">
                    <h3>Contact Us</h3>
                    <h4>Urban Research Program</h4>
                    <h4>317 S 6th St, Las Vegas, NV 89101</h4>
                    <Link to={props.link}><h4>Contact Form</h4></Link>
                </div>
            </div>
            <div>
                <h5>Copyright ©2017 Urban Research Project | All Rights Reserved.</h5>
            </div>
        </div>
    );
};

export default Footer;