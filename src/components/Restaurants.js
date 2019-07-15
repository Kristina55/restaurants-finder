import React, { Component } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";
import "../css/Restaurants.css";
import { Link } from "react-router-dom";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", restaurants: [], cuisines: [] };
  }

  async componentDidMount() {
    let response = await axios({
      method: "get",
      url: `https://developers.zomato.com/api/v2.1/search?city_id=306&collection_id=${
        this.props.match.params.id
      }`,
      headers: { "user-key": "b26f02984b714751b6c2f50247e4b9a8" }
    });

    this.setState({ restaurants: response.data.restaurants });
  }

  //Connect the API with the search term (API needs ID and search term is word)
  async getCuisines() {
    let cuisineResponse = await axios({
      method: "get",
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=306&q=${
        this.state.query
      }`,
      headers: { "user-key": "b26f02984b714751b6c2f50247e4b9a8" }
    });
    this.setState({
      cuisines: cuisineResponse.data.restaurants
    });
    // this.props.getCuisines(
    //   cuisineResponse.data.restaurants.map(one => one.restaurant.cuisines)
    // );
    //    console.log(
    //    cuisineResponse.data.restaurants.map(one => one.restaurant.cuisines)
    // );
  }

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getCuisines();
          }
        }
      }
    );
  };

  render() {
    console.log(this.state.cuisines);
    const restaurantsCollection = this.state.restaurants.map(one => (
      <Restaurant
        name={one.restaurant.name}
        image={one.restaurant.featured_image}
        key={one.restaurant.id}
        cuisines={one.restaurant.cuisines}
        location={one.restaurant.location.locality_verbose}
        url={one.restaurant.url}
      />
    ));
    return (
      <div>
        <div className="restaurants-header ">
          <div className="homepage-text">
            <div className="homepage-text-background">
              <h1>EXPLORE</h1>
              <p>Find your favorite food destination</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="query"
                    className="homepage-input"
                    placeholder="Search for wanted cuisine..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    ref={input => (this.search = input)}
                    onChange={this.handleInputChange}
                  />
                  <div>
                    <Link
                      to={{
                        pathname: "/cuisines",
                        state: { cuisines: this.state.cuisines }
                      }}
                    >
                      <button
                        className="btn btn-danger"
                        type="button"
                        id="homepage-button"
                      >
                        Search
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="box">
          <a href="#restaurants-section">
            <span />
          </a>
          <a href="#restaurants-section">
            <span />
          </a>
          <a href="#restaurants-section">
            <span />
          </a>
        </div>

        <div
          id="restaurants-section"
          className="container-fluid restaurants-collection"
        >
          <div className="row restaurants-collection-row">
            {restaurantsCollection}
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
