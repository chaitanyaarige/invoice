import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

export default function Dashboard() {
  // const APP_ID = "YOUR APP ID ";
  const APP_Route = "stationery";
  const API_URL = `https://apistationery.herokuapp.com/api/${APP_Route}`;
  // const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [stationery, setStationery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(API_URL, { method: "GET" })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setStationery(response.stationery);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // const saveInput = (e) => {
  //   console.log(e.target.value);
  // };

  // const addNewItem = () => {
  //   let { cart, input } = this.state;
  //   cart.push(input);
  //   this.state.cart.push(this.state.input); // same as above, though bad practice
  // };

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

          <div className="Card Dashboard__amount">
            <div className="Dashboard__received">Total Received amount</div> <br></br>
            <div className="Dashboard__rupees">&nbsp; &#8377; 89555</div>
          </div>

          <div>
            {stationery &&
              stationery.map((item, index) => {
                return (
                  <li className="Card Dashboard__invoices" key={index}>
                    #{index + 1} {item.prod_name}
                  </li>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
