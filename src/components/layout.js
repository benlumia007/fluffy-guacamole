/**
 * Layout component that queries for data
 * with Gatsby' useStaticQuery component
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Content from './content';
import Footer from './footer';

const Layout = ( { children } ) => {
    const data = useStaticQuery( graphql`
        query {
            site {
                siteMetadata {
                    title
                    tagline
                    primaryMenu {
                        name
                        url
                    }
                }
            }
        }
    `);

    return (
        <>
            <a className="skip-link screen-reader-text" href="#main">Skip to the content</a>
            <Header 
                siteTitle={ data.site.siteMetadata.title }
                siteTagline = { data.site.siteMetadata.tagline }
                primaryMenu = { data.site.siteMetadata.primaryMenu }
            />
            <Content children = { children } />
            <Footer
                siteTitle={ data.site.siteMetadata.title }
            />
        </>
    );
};

export default Layout;