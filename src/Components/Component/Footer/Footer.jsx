import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="top">
                    <div className="item">
                        <h3>Categories</h3>
                        <ul>
                            <li><Link to='/talents'>Talents</Link></li>
                            <li><Link to='/jobs'>Jobs</Link></li>
                            <li><Link to='/companies'>Companies</Link></li>
                            <li><Link to='/magazine'>Magazine</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Links</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Stores</Link></li>
                            <li><Link to='/'>FAQ</Link></li>
                            <li><Link to='/'>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quo soluta illum nostrum numquam quidem inventore laborum asperiores quod recusandae, reiciendis cumque assumenda a repellat accusantium eius cum voluptate nobis.</p>
                    </div>
                    <div className="item">
                        <h3>Contact</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quo soluta illum nostrum numquam quidem inventore laborum asperiores quod recusandae, reiciendis cumque assumenda a repellat accusantium eius cum voluptate nobis.</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="item">
                        <Link to='/'><h2>Film &</h2></Link>
                        <small>&copy; copyright 2023 | All rights reserved</small>
                    </div>
                    <img src="/Img/payment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;