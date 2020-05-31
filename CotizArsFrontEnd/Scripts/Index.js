import React from 'react';
import ReactDOM from 'react-dom';

window.MyReactApp = {
    init: (selector, myData) => {
        selector = selector.substring(1);
        const renderComponent = (<homeComponent mydata={myData} />);
        ReactDOM.render(renderComponent, document.getElementById(selector));
    },
};