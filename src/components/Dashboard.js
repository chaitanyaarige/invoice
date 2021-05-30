import React, { Component } from "react";
import "./Dashboard.scss";
export default class Dashboard extends Component {
  state = {
    stationery: [
      {
        id: 7,
        prod_code: "nat",
        prod_name: "natraj pencil",
        manufacturer: "",
        pre_gst: "12",
        post_gst: null,
        quantity: 500,
        unit_price: "35.00",
        updated_at: "2020-09-08T04:43:33.727Z",
        created_at: "2020-09-08T04:35:33.189Z",
      },
      {
        id: 8,
        prod_code: "apsara",
        prod_name: "Apsara pensil",
        manufacturer: "",
        pre_gst: "12",
        post_gst: "12",
        quantity: 22,
        unit_price: "10.00",
        updated_at: "2020-09-11T22:32:31.197Z",
        created_at: "2020-09-11T22:22:16.015Z",
      },
      {
        id: 9,
        prod_code: "Ruler",
        prod_name: "Apsara Long Scale",
        manufacturer: "Apsara",
        pre_gst: "1",
        post_gst: "2",
        quantity: 100,
        unit_price: "15.00",
        updated_at: "2021-02-21T15:21:58.977Z",
        created_at: "2021-02-21T13:00:40.388Z",
      },
      {
        id: 10,
        prod_code: "Stickers",
        prod_name: "Wall Stickers",
        manufacturer: "Amazzz",
        pre_gst: "5",
        post_gst: "5",
        quantity: 10,
        unit_price: "150.00",
        updated_at: "2021-02-21T16:18:03.960Z",
        created_at: "2021-02-21T13:01:13.341Z",
      },
      {
        id: 12,
        prod_code: "Ruler15",
        prod_name: "Apsara Small Scale",
        manufacturer: "Apsara",
        pre_gst: "1",
        post_gst: "2",
        quantity: 99,
        unit_price: "8.50",
        updated_at: "2021-02-21T16:19:33.800Z",
        created_at: "2021-02-21T15:33:59.966Z",
      },
      {
        id: 11,
        prod_code: "Ruler15",
        prod_name: "Natraj Small Scale",
        manufacturer: "Natraj",
        pre_gst: "2",
        post_gst: "2",
        quantity: 77,
        unit_price: "8.00",
        updated_at: "2021-02-21T16:19:50.595Z",
        created_at: "2021-02-21T15:32:08.524Z",
      },
    ],
  };

  saveInput = (e) => {
    console.log(e.target.value);
  };

  addNewItem = () => {
    // let { cart, input } = this.state;
    // cart.push(input);
    // this.state.cart.push(this.state.input); // same as above, though bad practice
  };

  render() {
    return (
      <div className="Dashboard__mainContainer">
        <div>&nbsp;</div>
        <h3>List of Invoices</h3>
        {/* <input type="text" onChange={this.saveInput} /> */}
        {/* <button onClick={this.addNewItem}> Add Item </button> */}
        <div className="Dashboard__card-container">
          <div>
            <div className="Dashboard__tableHeader">
              <span>Invoice</span>
              <span>Invoice</span>
              <span>Invoice</span>
            </div>
            <ul className="listNone">
              {this.state.stationery.map((item, index) => {
                return <li className="Dashboard__Card" key={index}>#{index + 1} {item.prod_name}</li>;
              })}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
