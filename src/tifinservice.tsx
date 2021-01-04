import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu1} from './menu1';
export class Tifinservice extends React.Component {
    constructor() {
      super({});
    }

    render() {
     return (<div className="s">
         <div className="menu_items">
              <Menu1 />
          </div>
          <br />
       <div className="green"><br /><li>Tiffin Service Near 10 KM Only : </li></div><br />
       <ul>
       <img className="img" src="/img/d.jpg" alt=""/>
        </ul>
        <div className="verites">{"Rules :"}</div>
        <ul>
        <h4>1.Food May be  delivery in 30 Min or more</h4>
        <h4>2.Please Open Food Packet When You Recieved Item</h4>
       <h4>3. We will not accept any online payment issue</h4>
        </ul>
        <NavLink exact to="/fastfood" className="main-nav" activeClassName="main-nav-active" ><h4>GO BACK TO MANU</h4></NavLink>
    </div>);
    }
}
