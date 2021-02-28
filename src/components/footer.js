import React from 'react';
import { Link } from 'gatsby';

const Footer = ( { siteTitle } ) => (
    <footer id="colophon" className="site-footer">
        <div className="site-info">
            <p>Power with Heart and Soul</p>
            <span className="site-title"><Link to="/">{ siteTitle }</Link></span>
        </div>
    </footer>
);

export default Footer;