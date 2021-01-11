import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
export class Fastfood extends React.Component {
    constructor() {
      super({});
    }

    render() {
      return (
      <div className="s">
                <div className="center">
                  <form>
                <label className="heading1">Enter Your Favorite Dishes :- </label>
    <select id="country" name="country" className="button2">
      <option value="pizza" >Pizza</option>
      <option value="burgers">Burgers</option>
      <option value="sandwich">Sandwich</option>
      <option value="drinks">Drinks</option>
    </select>
</form>
        </div>
        <h1 className="green"><li>Fast Food Menu</li></h1>
        <ul>
        <NavLink exact to="/pizza" className="main-nav" activeClassName="main-nav-active" ><h3>1. Pizza :</h3></NavLink>
        <ul>
        <img className="img" src="/img/wave.jpg" alt=""/>
        </ul>
        <NavLink exact to="/burger" className="main-nav" activeClassName="main-nav-active" > <h3>2. Burger : </h3></NavLink>
        <ul>
        <img className="img" src="/img/big.jpg" alt=""/>
        </ul>
        <NavLink exact to="/sandwich" className="main-nav" activeClassName="main-nav-active" > <h3>3. Sandwich : </h3></NavLink>
        <ul>
        <img className="img" src="/img/grill.jpg" alt=""/>
        </ul>
        <NavLink exact to="/drinks" className="main-nav" activeClassName="main-nav-active" > <h3>4. Drinks : </h3></NavLink>
        <ul>
        <img className="img" src="/img/soda.jpg" alt=""/>
        </ul>
        </ul>
      
    </div>);
    }
}
