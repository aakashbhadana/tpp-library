import React from 'react';

function Loader({loading, className=''}) {
    return (
        <div className={`page-loader ${className} ${loading?'':'hide'}`}></div>
    );
}

export default Loader;