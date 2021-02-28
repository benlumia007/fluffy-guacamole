import React from 'react';
import { Link } from 'gatsby';

const primaryMenu = ( { primaryMenu } ) => {
    return (
        <nav className="primary-menu">
            <ul>
                { primaryMenu.map( props => (
                    <li key={ props.name }>
                      <Link to={ props.url }>{ props.name }</Link>
                    </li>
                ) ) }
            </ul>
        </nav>
    );
};

export default primaryMenu;