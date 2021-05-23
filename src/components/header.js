import './Header.scss'
import React, { lazy, useEffect, useState } from 'react';


export default function Header() {

  const [showStock, setShowStock] = useState(false);
  const [showBuyer, setShowBuyer] = useState(false);
  const [currentColor, setCurrentColor] = useState('white');

  const routemeto = (data) => {
    // this.$router.push({ path: `/${data}` }).catch(err => {});
  };

  const onOver = (data) => {
    switch (data) {
      case "buyer":
        return (setShowBuyer(true));
      case "stock":
        return (setShowStock(true));
    }
  };
  const onLeave = () => {
    setShowBuyer(true)

    // this.showStock = false;
    // this.showBuyer = false;
  };

  return (
    <div className="HeaderList">
      <div onClick={() => onOver('buyer')}>
         Dashboard</div>

      <div>Credit Invoice</div>
      <div>Stock In</div>
      <div>Buyers List</div>
      <div>{showBuyer ? 'List' : 'fddfdfd'} </div>
      <div> {showStock} Audit</div>
    </div>
  );
}





