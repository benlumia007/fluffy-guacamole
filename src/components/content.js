import React from 'react';

const Content = ( { children } ) => (
    <section id="content" className="site-content">
    <div id="main" className="content-area">
        { children }
    </div>
</section>
);

export default Content;