import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Home from "./components/Home";
import Cuisines from "./components/Cuisines";
import { fetchCollections, fetchRestaurants } from "./Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      restaurants: []
      //    cuisines: []
    };
    // this.getCuisinesData = this.getCuisinesData.bind(this);
  }

  async componentDidMount() {
    let collections = await fetchCollections();
    let restaurants = await fetchRestaurants();
    this.setState({ collections, restaurants });
    console.log(collections);
    console.log(restaurants);
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              collections={this.state.collections}
              restaurants={this.state.restaurants}
            />
          )}
        />
        <Route
          path="/restaurants/:id"
          render={props => <Restaurants {...props} />}
        />
        <Route
          exact
          path="/cuisines"
          render={props => (
            <Cuisines {...props} restaurants={this.state.restaurants} />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
