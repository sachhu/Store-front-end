import { Component } from "react";
import { Cart } from "./Cart";

export class Carts extends Component {
  constructor(props) {
    super(props);
    this.cart = this.props.cart;
    this.state = {
      price: 0,
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <h4 className="p-5">Cart {this.props.sid}</h4>
        <div className="row">
          {console.log(this.props)}
          {this.cart.map((prod, index) => {
            return (
              <Cart
                key={index}
                id={prod.item_id}
                sellerid={prod.sellerid}
                item_name={prod.item_name}
                price={prod.price}
                quantity={prod.quantity}
                handlePrice={this.handlePrice}
                handleCart={this.props.handleCart}
              />
            );
          })}
        </div>
        <div className="p-5">
          <span className="float-start">
            Total Cart price: {this.state.price} Rs.
          </span>
          <button className="btn btn-outline-success float-end">
            Check out
          </button>
        </div>
      </div>
    );
  }
  handlePrice = (price) => {
    let sta = this.state;
    sta.price = sta.price + price;
    this.setState(sta);
  };
  componentDidMount() {
    let price = 0;
    for (var i = 0; i < this.cart.length; i++) {
      price = price + this.cart[i].price * this.cart[i].quantity;
    }
    this.setState({ price: price });
  }
}
