import { Component } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";
import item from "./data/item.json";
import { Link } from "react-router-dom";

export const Itm = (props) => {
  const params = useParams();
  console.log(props);
  return <Items sid={params.sid} handleCart={props.handleCart} />;
};

export class Items extends Component {
  constructor(props) {
    super(props);
    this.sid = this.props.sid;
    this.state = {
      cart: [],
      price: 0,
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <h4 className="p-5">Item sold by seller {this.props.sid}</h4>
        <div className="row">
          {this.state.cart.map((prod) => {
            return (
              <Item
                key={prod.item_id}
                id={prod.item_id}
                item_name={prod.item_name}
                price={prod.price}
                sid={this.sid}
                handlePrice={this.handlePrice}
                handleCart={this.props.handleCart}
              />
            );
          })}
        </div>
        <div className="p-5">
          <span className="float-start">
            Total price: {this.state.price} Rs.
          </span>
          <Link to="/cart" className="nav-link active">
            <button className="btn btn-outline-success float-end">
              Go to Cart
            </button>
          </Link>
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
    this.setState({ cart: item });
  }
}
