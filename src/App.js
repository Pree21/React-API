import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, NavLink } from "react-router-dom"
import Home from './components/Home.js';
import Favourites from './components/Favourites.js';

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      term: '',
    }
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60")
      .then(response => response.json())
      .then(data => {
        this.setState({
          beers: data
        })
      })
  }
  handleSearch = (event)=> {
    this.setState({
      term: event.target.value,
    })
  }
  handleClick() {
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite,
    }))
  }
  render() {
    const {beers,term}=this.state;
    return (
      <div className="beer-app">
        <Router>
          <header>
            <h1 className="logo">Beans Love Beers</h1>
            <div className="menu">
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
              <NavLink to="/favourites" exact activeClassName="active">Favourites</NavLink>
            </div>
          </header>
          
          <div className="main">
          <Route exact path="/" render={()=>
            <div className="search-form">
            <form>
              <input type="text" className="text" placeholder="Search by beer name" onChange={this.handleSearch} />
            </form>
          </div>
          } />
            <div className="box-outer">
              <Route exact path="/" render={(props) =>
                beers.filter(searchingFor(term)).map(item => <Home key={item.id} 
                  item={item} />)
              } />
              <Route exact path="/favourites" component={Favourites} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
