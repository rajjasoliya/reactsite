import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
import './index.css';
export class Drinks extends React.Component {
    constructor() {
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
            <h2 className="heading1">WELCOME TO DRINKS RIVER</h2>
             <ul>
        <div>{"1.Coca Cola"}</div>
        <ul>
        <img className="img" src="/img/coca.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"2.Pepsi Cola"}</div>
        <ul>
        <img className="img" src="/img/pepsi.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"3.Beer"}</div>
        <ul>
        <img className="img" src="/img/beer.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"4.Cheri Drinks"}</div>
        <ul>
        <img className="img" src="/img/cheri.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"5.Orange Drinks"}</div>
        <ul>
        <img className="img" src="/img/orange.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO BACK TO MANU</h4></NavLink>
        </ul>
        </div>);
    }
}