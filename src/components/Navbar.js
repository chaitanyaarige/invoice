import './Navbar.scss'
import houseDoor from 'assets/houseDoor.svg'
import creditCard from 'assets/creditCard.svg'
import cloudDownload from 'assets/cloudDownload.svg'
import React, { lazy, useEffect, useState } from 'react';

export default function Navbar() {

  const [showStock, setShowStock] = useState(false);
  const [showBuyer, setShowBuyer] = useState(false);
  const [currentColor, setCurrentColor] = useState('white');

  function routemeto(e, data) {
    e.preventDefault();
    // this.$router.push({ path: `/${data}` }).catch(err => {});
    console.log('test time', e)
  };

  function onOver(data) {
    switch (data) {
      case "buyer":
        return (setShowBuyer(true));
      case "stock":
        return (setShowStock(true));
    }
  };
  function onLeave(){
    setShowBuyer(true)
    // this.showStock = false;
    // this.showBuyer = false;
  };

  return (
  <div className="d-print-none">
    <div className="Navbar__shorts">

    <div onClick={e => routemeto(e, '')} className="Navbar__smallBoxes">
      <img className="Navbar__logo" src={houseDoor} alt="yt" />
      <span className="pl-2">Dashboard</span>
    </div>


    <div onClick={e => routemeto(e, 'creditbill')} className="Navbar__smallBoxes">
      <img className="Navbar__logo" src={creditCard} alt="yt" />
      <span className="pl-2">Credit Invoice</span>
    </div>


    <div onClick={e => routemeto(e, 'cashbill')} className="Navbar__smallBoxes">
    <span class="Navbar__rupee">&#8377;</span>
      <span class="pl-2">Cash Invoice</span>
    </div>


    <div onmouseOver={e => onOver(e, 'stock')} className="Navbar__smallBoxes">
      <img className="Navbar__logo" src={cloudDownload} alt="yt" />
      <span className="pl-2">Stock In</span>
    </div>

    {/* <div v-if="showStock" class="Navbar__cardcontainer">
        <b-card>
          <div @click.prevent="routemeto('stockin/books')" class="Navbar__card">Books</div>
          <div @click.prevent="routemeto('stockin/govtbooks')" class="Navbar__card">Govt Books</div>
          <div @click.prevent="routemeto('stockin/stationery')" class="Navbar__card">Stationery</div>
          <div
            @click.prevent="routemeto('stockin/registers')"
            class="Navbar__card Navbar__card-last"
          >Printed Registers</div>
        </b-card>
      </div> */}
{/*

    <div onClick={routemeto} className="Navbar__smallBoxes">
      <img className="Navbar__logo" src={houseDoor} alt="yt" />
      <span className="pl-2">Dashboard</span>
    </div>


    <div onClick={routemeto} className="Navbar__smallBoxes">
      <img className="Navbar__logo" src={houseDoor} alt="yt" />
      <span className="pl-2">Dashboard</span>
    </div> */}




    </div>
  </div>
  );
}
