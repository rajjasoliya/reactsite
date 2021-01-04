import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
export class Restourant extends React.Component {
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
          <br />
      <h2 className="green"><li>Restourant Menu : </li></h2>
      <br />
      <div>{"1.Special Indian Food"}</div>
      <ul>
      <img className="img" src="/img/india.jpg" alt=""/>
      </ul>
      <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
      <div>{"2.Special Gujarati food"}</div>
      <ul>
      <img className="img" src="/img/gujarati.jpg" alt=""/>
      </ul>
      <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
      <div>{"3.Special Punjabi Dishes"}</div>
      <ul>
      <img className="img" src="/img/punjabi.jpg" alt=""/>
      </ul>
      <br />
        <button className="button button1" onClick={this.button.bind(this,"Order Confirmed")}>ORDER</button> &nbsp;&nbsp;&nbsp;&nbsp; <button className="button button1"  onClick={this.button.bind(this,"Item Add to Cart")}>Add To Cart</button>
        <ul><br /></ul>
      <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO BACK TO MANU</h4></NavLink>

  </div>);
    }
}