import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="text-decoration-none link-dark">
          <div className="card m-2">
            <div className="card-body">
              Item id: {this.props.id}
              <span className="float-end">
                Seller id: {this.props.sellerid}
              </span>
              <h4 className="pt-5 border-top">Name: {this.props.item_name}</h4>
              Price : {this.props.price} Rs.
            </div>
            <div className="card-footer">
              <span>Quantity: {this.props.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
