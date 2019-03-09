import React, { Component } from "react";
import ReactDOM from "react-dom";
import Markdown from './component/markdown';


if (document.getElementById('markdown')) {
    ReactDOM.render(
        <Markdown />,
        document.getElementById('markdown')
    );
}

