import React, { Component } from "react";
import "../css/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="homepage-text">
        <div className="homepage-text-background">
          <h1>FOOD PASSION</h1>
          <p>Find the best restaurants, cafés, and bars in San Francisco</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="homepage-input"
              placeholder="Find restaurant or cuisine..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div>
              <button class="btn btn-danger" type="button" id="homepage-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
