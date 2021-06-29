import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import {Menu} from './menu';
import {Fastfood} from './fastfood';
import {Restourant} from './restourant';
import {Tifinservice} from './tifinservice';
import {Pizza} from './pizza';
import {Burger} from './burger';
import {Sandwiche} from './sandwich';
import {Drinks} from './drinks';
import {initializeIcons} from '@uifabric/icons';
export class Main extends React.Component {
  constructor() {
    super({});
    initializeIcons();
  }
  
render() {  
  return (
  <div className="main_page">
     <div className="title">Globle Kitchen</div>
   <Router>
      <div className="menu_items">
       <Menu />
      </div>
      <div>
        <Switch>
          <Route path="/fastfood"><Fastfood /></Route>
          <Route path="/restourant"><Restourant /></Route>
          <Route path="/tifinservice"><Tifinservice /></Route>
          <Route path="/pizza"><Pizza /></Route>
          <Route path="/burger"><Burger /></Route>
          <Route path="/sandwich"><Sandwiche /></Route>
          <Route path="/drinks"><Drinks /></Route>
        </Switch>
      </div>
    </Router>
    </div>);
}

}

ReactDOM.render(
  <>
  <Main />
  </>,
  document.getElementById('root')
);
