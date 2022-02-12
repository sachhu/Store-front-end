import React, { Component } from "react";
import { Seller } from "./Seller";
import sellerList from "./data/seller.json";

export class Sellers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: [],
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h4 className="p-5">Seller List</h4>

        <div className="row">
          {this.state.seller.map((prod) => {
            return (
              <Seller
                key={prod.id}
                id={prod.id}
                name={prod.name}
                image={prod.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log(sellerList);
    this.setState({ seller: sellerList });
  }
}
