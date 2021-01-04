import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
import './index.css';
export class Sandwiche extends React.Component {
    constructor() {
        super({});
    }
    button(a: any) {
        alert(a);
      }  
    render() {
        return (<div className="s">
             <div className="menu_items">
              <Menu1 />
          </div>
            <h2 className="heading1">WELCOME TO SANDWICH STRITE</h2>
             <ul>
        <div>{"1.Vegan Veggie Sandwich"}</div>
        <ul>
        <img className="img" src="/img/vegan.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"2.California Veggie Sandwich"}</div>
        <ul>
        <img className="img" src="/img/cali.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"3.Avocado Veggie Sandwich"}</div>
        <ul>
        <img className="img" src="/img/avo.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"4.Grill Sandwich"}</div>
        <ul>
        <img className="img" src="/img/grill.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <div>{"5.Mayonnaise Sandwich"}</div>
        <ul>
        <img className="img" src="/img/May.jpg" alt=""/>
        </ul>
        <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
        <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO BACK TO MANU</h4></NavLink>
        </ul>
        </div>);
    }
}