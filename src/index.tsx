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
  return (<div className="main_page">
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
/*
import PetItem from './PetItem'
import PetList from './PetList'
import PetViewer from './PetViewer'

const PetList = (props) => {
  return(
  <>
    <lable htmlFotr="search">Search Item</lable>
    <input type="text" value={props.inputValue} onChange={props.petFilterOnchange}/>

    )
}
    class PetContainer extends Component {
      state = {
        pets: [],
        pet: {},
        isPetViewOn: false,
        sortValue:'',
        inputValue:'',
      }
    }
petFilterOnChange = (event) => {
  console.log("hi from onchange", event.target.value)
  this.setState({ isineValue: event.target.value
  })
}
<PetList pets={this.sortPets(filteredPets)}
handlePetView={this.handlePetView}
petFilterOnChange={this.petFilterOnChange}
inputValue={this.state.inputValue}/>

const filteredPets =
this.state.pets.filter(pet => {
  return pet.name.toLowerCase( ).inCludes(this.state.inputValue.toLowerCase())
})

*/