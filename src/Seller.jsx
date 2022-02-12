import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/main.css";

export class Seller extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <Link
          to={"/seller/" + this.props.id}
          className="text-decoration-none link-dark"
        >
          <div>
            <div className="card m-2">
              <div className="card-body">
                Seller id: {this.props.id}
                <h4 className="pt-5 border-top">Name: {this.props.name}</h4>
                <img
                  className="shopImage"
                  src={this.props.image}
                  alt="seller"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
