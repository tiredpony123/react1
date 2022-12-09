import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import CartItem from "./components/CartItem.js";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'






/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setTotal] = useState(0);
  const [pastryType, setPastryType] = useState([]);
  const [dietary, setDietary] = useState([])
  const [sortedData, setSorted] = useState([...bakeryData])

  //add to cart
  const addToCart = (bakery) => {
    console.log(bakery);
    console.log(cart);
    setCart([... cart, bakery]);
    setTotal(bakery.price + cartTotal)
  }

  //remove from cart
  const removeFromCart = (bakery) => {

    console.log(cart);
    let i = 0;
    for(const c of cart){
      if (c.name==bakery.name){
        break;
      } else {
        i++;
      }
    }
    console.log(i);
    const cartCopy = [... cart];
    console.log(cartCopy);
    cartCopy.splice(i, 1);
    setCart(cartCopy);
    console.log(bakery.price)
    setTotal(cartTotal - bakery.price)
    console.log(cartTotal)
    
  };


  //------------------------------------FILTER------------------------------------

  // choose pastry type
  const pastryTypeSelection = (filterKey) => {
    let allTypes = [...pastryType];
    if(!(pastryType.includes(filterKey))) {
      allTypes.push(filterKey);
    } else {
      const index = pastryType.indexOf(filterKey);
      allTypes.splice(index, 1);
    }

    setPastryType(allTypes);
  };

  const pastryTypeApplied = (f) => {
    if ((pastryType.length == 0) || (pastryType.includes(f.type))) {
      return true;
    } else {
      return false;
    }
  };

  // choose dietary restrictions
  const dietarySelection = (filterKey) => {
    let allDietary = [...dietary];
    if(!(dietary.includes(filterKey))) {
      allDietary.push(filterKey);
    } else{
      const index = dietary.indexOf(filterKey);
      allDietary.splice(index, 1);
    }
    setDietary(allDietary);
  };

  const dietaryApplied = (f) => {
    for(const d of dietary){
      if (!f.dietary.includes(d)) {
        return false;
      }
    }
    return true;
  };

  // apply all the filters
  const allFilters = (bakery) => {
    return (pastryTypeApplied(bakery) && dietaryApplied(bakery));
  };





  //------------------------------------SORT------------------------------------
  
  // choose sort option
  const chooseSort = (sortOption) => {
    let sorted = [...sortedData]

    if (sortOption == "Price High to Low") {
      sorted.sort((b1, b2) => {
        if (b1.price > b2.price) {
          return -1;
        } else {
          return 1;
      }});
      setSorted(sorted);
    } else if (sortOption == "Price Low to High") {
      sorted.sort((b1, b2) => {
        if (b1.price < b2.price) {
          return -1;
        } else {
          return 1;
        }
      } );
      setSorted(sorted);
    } else if (sortOption == "Most Popular") {
      sorted.sort((b1, b2) => {
        if (b1.popular > b2.popular) {
          return -1;
        } else {
          return 1;
        }
      } );
      setSorted(sorted);
    }
  }

  const sortedDataFinal = sortedData.filter((bakery) => allFilters(bakery)) 

return (
  <div className="App">
    <h1>TiredPony123's Bakery</h1> 

    <div className="Filter and Sort">
      <div className="Type of Pastry">
        <h3>Filter: Pastry Type</h3>
        {/* Source code for toggle button: https://react-bootstrap.netlify.app/components/buttons/#toggle-button-group-props */}
        <ToggleButtonGroup size="sm" type="checkbox"  defaultValue={[1,2,3,4,5]}>
          <ToggleButton id="tbg-check-1" value={1} onClick={()=>pastryTypeSelection("cheesecake")}>
            Cheesecake
          </ToggleButton>

          <ToggleButton id="tbg-check-2" value={2} onClick={()=>pastryTypeSelection("croissant")}>
            Croissant
          </ToggleButton>

          <ToggleButton id="tbg-check-3" value={3} onClick={()=>pastryTypeSelection("eclair")}>
            Eclair
          </ToggleButton>

          <ToggleButton id="tbg-check-4" value={4} onClick={()=>pastryTypeSelection("cake")}>
            Cake
          </ToggleButton>

          <ToggleButton id="tbg-check-5" value={5} onClick={()=>pastryTypeSelection("pie")}>
            Pie
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="Dietary Selection">
        <h3>Filter: Dietary Restrictions</h3>
        <ToggleButtonGroup size="sm" type="checkbox"  defaultValue={[6,7,8]}>
          <ToggleButton id="tbg-check-2.1" value={6} onClick={()=>dietarySelection("nut-free")}>
            Nut-Free
          </ToggleButton>

          <ToggleButton id="tbg-check-2.2" value={7} onClick={()=>dietarySelection("gluten-free")}>
            Gluten-Free
          </ToggleButton>

          <ToggleButton id="tbg-check-2.3" value={8} onClick={()=>dietarySelection("dairy-free")}>
            Dairy-Free
          </ToggleButton>
        </ToggleButtonGroup>
      </div>


      <div className="Sort">
        <h3>Filter: Sorting Selections</h3>
        <ButtonGroup size="sm" type="radio"  defaultValue={[9, 10, 11]}>
          <Button id="tbg-check-3.1" value={9} onClick={()=>chooseSort("Price High to Low")}>
            Price High to Low
          </Button>

          <Button id="tbg-check-3.2" value={10} onClick={()=>chooseSort("Price Low to High")}>
            Price Low to High
          </Button>

          <Button id="tbg-check-3.3" value={11} onClick={()=>chooseSort("Most Popular")}>
            Most Popular
          </Button>
        </ButtonGroup>
      </div>

      <div className="bakery-items">
        {sortedDataFinal.filter((bakery) => pastryTypeApplied(bakery)).filter((bakery) =>dietaryApplied(bakery)).map((bakery, index) =>

         <BakeryItem key= {index} item = {bakery}  addToCart = {addToCart}/>)}
      </div>

      <div>
        <h1> Cart </h1>
        {cart.map((bakery, index) => 
         <CartItem key= {index} cartItem = {bakery} removeFromCart = {removeFromCart}/> 
        )}
      </div>

      <div>
        <h3>Total: ${cartTotal}</h3>
      </div>
 
    </div>

  </div>


  );



}

export default App;