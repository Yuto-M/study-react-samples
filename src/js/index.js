import React, { Component } from "react";
import ReactDOM from "react-dom";
import Markdown from './component/markdown';
import TemplatureConversion from './component/templature-conversion';


if (document.getElementById('markdown')) {
    ReactDOM.render(
        <Markdown />,
        document.getElementById('markdown')
    );
}

if (document.getElementById('templature-conversion')) {
    ReactDOM.render(
        <TemplatureConversion />,
        document.getElementById('templature-conversion')
    );
}
