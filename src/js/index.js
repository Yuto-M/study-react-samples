import React from "react";
import ReactDOM from "react-dom";
import Markdown from './component/markdown';
import TemplatureConversion from './component/templature-conversion';
import FilterableProductTable from "./component/filterable-product-table";


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

if (document.getElementById('filterable-product-table')) {
    const PRODUCTS = [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];

    ReactDOM.render(
        <FilterableProductTable products={PRODUCTS} />,
        document.getElementById('filterable-product-table')
    );
}
