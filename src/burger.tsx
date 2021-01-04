import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
import './index.css';
export class Burger extends React.Component {
    constructor () {
        super({});
    }
    button(a: any) {
        alert(a);
      }  
    render() {
        return (
            <div className="s">
                 <div className="menu_items">
              <Menu1 />
          </div>
                <h2 className="heading1">WELCOME TO BURGER MANIA</h2>
            <ul>
        <div>{"1.Whopper Burgers"}</div>
        <ul>
        <img className="img" src="/img/whooper.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"2.Chili Burgers"}</div>
        <ul>
        <img className="img" src="/img/chili.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"3.Cheese Burgers"}</div>
        <ul>
        <img className="img" src="/img/cheese.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"4.Steak Burgers"}</div>
        <ul>
        <img className="img" src="/img/steak.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"5.Mc'Donalds Big Burgers"}</div>
        <ul>
        <img className="img" src="/img/big.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        </ul>
        <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO TO MANU</h4></NavLink>
        </div>);
    }
}