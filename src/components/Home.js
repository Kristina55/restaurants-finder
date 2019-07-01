import React, { Component } from "react";
import "../css/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="homepage-text">
        <div className="homepage-text-background">
          <h1>FOOD PASSION</h1>
          <p>Find the best restaurants, cafés, and bars in San Francisco</p>
        </div>
        {/* <form>
          <input
            className="search-input"
            type="text"
            placeholder="search for restaurants or cuisines.."
          />
          <button>Search</button>
        </form> */}
      </div>
    );
  }
}

export default Home;
