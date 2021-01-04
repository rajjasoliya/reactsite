import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
import './index.css';
export class Pizza extends React.Component {
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
            <h2 className="heading1">" WELCOME TO PIZZA BAZAR " </h2>
            <text>
            <ul>
        <div>{"1.Margherita Pizza"}</div>
        <br/>
        <ul>
        <img className="img" src="/img/pizza.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"2.Double Cheese Margherita Pizza"}</div>
        <br />
        <ul>
        <img className="img" src="/img/double.jpg" alt=""/>
        <br />
        </ul>
        <br />
        <button className="button button1"  onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1" onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <br />
        <div>{"3.Mexican Green Wave Pizza"}</div>
        <br />
        <ul>
        <img className="img" src="/img/wave.jpg" alt=""/>
        <br />
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1" onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <br />
        <div>{"4.Peppy Paneer."}</div>
        <br />
        <ul>
        <br />
        <img className="img" src="/img/peppy.jpg" alt=""/>
        <br />
        </ul>
        <br />
        <button className="button button1"  onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1" onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <br />
        <div>{"5.Cheese N Corn"}</div>
        <br />
        <ul>
        <img className="img" src="/img/n.jpg" alt=""/>
        <br />
        </ul>
        <br />
        <button className="button button1"  onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1" onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO BACK TO MANU</h4></NavLink>
        </ul>
        </text>
        </div>);
    }
}