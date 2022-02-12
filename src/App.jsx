import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { Sellers } from "./Sellers";
import { Nofound } from "./Nofound";
import { Carts } from "./Carts";
import { Itm } from "./Items";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.handleCart = this.handleCart.bind(this);
  }
  handleCart(newelement) {
    let sta = this.state.cart;
    console.log("newelemtnt", newelement);
    if (sta.length === 0 && newelement.quantity !== 0) {
      sta.push(newelement);
    } else {
      for (var i = 0; i < sta.length; i++) {
        if (
          sta[i].item_id === newelement.item_id &&
          sta[i].sellerid === newelement.sellerid
        ) {
          if (newelement.quantity === 0) {
            sta.splice(i, 1);
            break;
          }
          sta[i] = newelement;
          break;
        }
        if (i === sta.length - 1) {
          sta.push(newelement);
        }
      }
    }
    this.setState({ cart: sta });
    console.log(this.state);
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/sellers" element={<Sellers />} />
          <Route
            path="/seller/:sid"
            element={
              <Itm cart={this.state.cart} handleCart={this.handleCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Carts cart={this.state.cart} handleCart={this.handleCart} />
            }
          />
          <Route path="*" element={<Nofound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
