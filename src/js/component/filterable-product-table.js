import React from "react";
import SearchBar from "./search-bar";
import ProductTable from "./product-table";

export default class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}