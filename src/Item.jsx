import React, { Component } from "react";

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowest_price: 0,
      itemsell: 0,
      quantity: 0,
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onDecrement = () => {
    let sta = this.state;
    if (sta.quantity !== 0) {
      this.props.handlePrice(-1 * this.state.lowest_price);
    }
    sta.quantity = sta.quantity === 0 ? sta.quantity : sta.quantity - 1;
    let cart = {
      item_id: this.props.id,
      item_name: this.props.item_name,
      sellerid: this.props.price[this.state.itemsell].sellerid,
      quantity: this.state.quantity,
      price: this.state.lowest_price,
    };
    this.props.handleCart(cart);

    this.setState(sta);
  };
  onIncrement = () => {
    let sta = this.state;

    sta.quantity = sta.quantity + 1;
    if (sta.quantity !== 0) {
      this.props.handlePrice(this.state.lowest_price);
    }
    let cart = {
      item_id: this.props.id,
      item_name: this.props.item_name,
      sellerid: this.props.price[this.state.itemsell].sellerid,
      quantity: this.state.quantity,
      price: this.state.lowest_price,
    };
    this.props.handleCart(cart);
    this.setState(sta);
  };

  render() {
    return (
      <div className="col-lg-12">
        <div>
          <div className="card m-2">
            <div className="card-body">
              Item id: {this.props.id}
              <h4 className="pt-5 border-top">Name: {this.props.item_name}</h4>
              Price : {this.state.lowest_price} Rs.
            </div>
            <div className="card-footer">
              <span>Quantity: {this.state.quantity}</span>
              <div className="btn-group float-end">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.onIncrement();
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.onDecrement();
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var arr = this.props.price;
    var price = 0;
    var sel = 0;
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].sellerid, this.props.sid);
      if (arr[i].sellerid === this.props.sid) {
        price = arr[i].price;
        sel = i;
        break;
      }
    }
    let sta = this.state;
    sta.lowest_price = price;
    sta.itemsell = sel;
    this.setState(sta);
  }
}
